// Get Elements

let display = document.querySelector('.display');
let btns = Array.from(document.getElementsByClassName('button'));
let links = Array.from(document.getElementsByClassName('link'));
let calc = document.querySelector('.calc');
let simp = document.querySelector('.simple');
let comp = document.querySelector('.compound');
let disc = document.querySelector('.discount');
let gst = document.querySelector('.gst');
let logo = document.querySelector('#logo');
let link1 = document.querySelector('#link-1');
let link2 = document.querySelector('#link-2');
let link3 = document.querySelector('#link-3');
let link4 = document.querySelector('#link-4');
let submitGst = document.getElementById('gstCalc');
let resultGst = document.querySelector('.gst-result');
let submitDis = document.getElementById('disCalc');
let resultDis = document.querySelector('.dis-result');
let submitSi = document.getElementById('siCalc');
let resultSi = document.querySelector('.si-result');
let submitCi = document.getElementById('ciCalc');
let resultCi = document.querySelector('.ci-result');
let title = document.querySelector('.title');

window.addEventListener('load',(e) => {
     calc.style.display = 'block';
                simp.style.display = 'none';
                comp.style.display = 'none';
                disc.style.display = 'none';
                gst.style.display = 'none';
})


btns.map(button => {
    button.addEventListener('click', (e) => {
        switch (e.target.innerText) {
            case 'C':
                display.innerText = '';
                break;
            case '=':
                try {
                    display.innerText = eval(display.innerText);
                } catch {
                    alert("Incoorect Expression")
                    display.innerText = '';
                }
                break;
            case '←':
                if (display.innerText) {
                    display.innerText = display.innerText.slice(0, -1);
                }
                break;
            default:
                display.innerText += e.target.innerText;
        }
    });
});

links.map(link => {
    link.addEventListener('click', (e) => {
        switch (e.target.innerText) {
            case 'Calculator.io':
                calc.style.display = 'block';
                simp.style.display = 'none';
                comp.style.display = 'none';
                disc.style.display = 'none';
                gst.style.display = 'none';
                title.innerText = 'Calculator';
                break;
            case 'Simple Interest Calculator':
                simp.style.display = 'block';
                calc.style.display = 'none';
                comp.style.display = 'none';
                disc.style.display = 'none';
                gst.style.display = 'none';
                link1.classList.add('active');
                link2.classList.remove('active');
                link3.classList.remove('active');
                link4.classList.remove('active');
                title.innerText = 'Simple Interest';
                break;
            case 'Compound Interest Calculator':
                comp.style.display = 'block';
                calc.style.display = 'none';
                simp.style.display = 'none';
                disc.style.display = 'none';
                gst.style.display = 'none';
                link2.classList.add('active');
                link1.classList.remove('active');
                link3.classList.remove('active');
                link4.classList.remove('active');
                title.innerText = 'Compound Interest';
                break;
            case 'GST Tax Calculator':
                gst.style.display = 'block';
                calc.style.display = 'none';
                comp.style.display = 'none';
                disc.style.display = 'none';
                simp.style.display = 'none';
                link3.classList.add('active');
                link1.classList.remove('active');
                link2.classList.remove('active');
                link4.classList.remove('active');
                title.innerText = 'GST Calculator';
                break;
            case 'Discount Calculator':
                disc.style.display = 'block';
                calc.style.display = 'none';
                comp.style.display = 'none';
                simp.style.display = 'none';
                gst.style.display = 'none';
                link4.classList.add('active');
                link1.classList.remove('active');
                link3.classList.remove('active');
                link2.classList.remove('active');
                title.innerText = 'Discount Calculator';
                break;
        }
    });
});

submitGst.addEventListener('click', (e) => {
    let per = document.getElementById("per").value;
    let rate = document.getElementById('amt').value;
    let gst = eval(rate + '*' + per + '/100');
    resultGst.innerText = gst;
});

submitDis.addEventListener('click', (e) => {
    let disRate = document.getElementById("disRate").value;
    let cp = document.getElementById('cp').value;
    let discount = eval(disRate + '/100 * ' + cp);
    let sp = eval(cp+'-'+discount);
    resultDis.innerText = "Discount : "+discount+"\nSelling Price = " + sp;
});

submitSi.addEventListener('click', (e) => {
    let p = document.getElementById("princ").value;
    let r = document.getElementById('si').value;
    let t = document.getElementById('year').value;
    let siVal = eval('('+p + ' * ' + r + ' * ' + t + ')/100');
    let totalAmtSi = eval(p + '+' + siVal)
    // let sp = eval(cp+'-'+discount);
    resultSi.innerText = "Simple Interest : "+siVal+"\nTotal Amount = "+totalAmtSi;
});

submitCi.addEventListener('click', (e) => {
    let p = document.getElementById("Comprinc").value;
    let r = document.getElementById('ci').value;
    let t = document.getElementById('Coyear').value;
    let n = document.getElementById('Cotimes').value;
    // p * (Math.pow((1 + (r / n)), (n * t)))
    let totalAmtCi = eval(p + ' * (Math.pow(( 1 + (' + r + ' / ' + n + ')), (' + n + ' * ' + t + ')))');
    let cinterest = eval(totalAmtCi + '-' + p)
    // let sp = eval(cp+'-'+discount);
    resultCi.innerText = "Compound Interest : "+cinterest+"\nTotal Amount = "+totalAmtCi;
});