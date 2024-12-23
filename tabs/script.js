    const tabs = document.querySelectorAll(".content div");
    const body = document.body;
    const buttonOne = document.getElementById('first');
    const buttonSecond = document.getElementById('second');
    const buttonThird = document.getElementById('third');
    const buttonFourth = document.getElementById('fourth');

    
    buttonOne.addEventListener('click', () => {
        tabs[0].style.display='block';
        tabs[1].style.display='none';
        tabs[2].style.display='none';
        tabs[3].style.display='none';

        buttonOne.style.borderBottom = '1px solid black';
        buttonSecond.style.borderBottom = 'none';
        buttonThird.style.borderBottom = 'none';
        buttonFourth.style.borderBottom = 'none';

        buttonOne.style.opacity = '1';
        buttonSecond.style.opacity = '0.5';
        buttonThird.style.opacity = '0.5';
        buttonFourth.style.opacity = '0.5';

        body.style.background = 'linear-gradient(rgb(95, 146, 141), rgb(61, 76, 82), rgb(54, 52, 56))';

    });
    buttonSecond.addEventListener('click', () => {
        tabs[0].style.display='none';
        tabs[1].style.display='block';
        tabs[2].style.display='none';
        tabs[3].style.display='none';

        buttonOne.style.borderBottom = 'none';
        buttonSecond.style.borderBottom = '1px solid black';
        buttonThird.style.borderBottom = 'none';
        buttonFourth.style.borderBottom = 'none';

        buttonOne.style.opacity = '0.5';
        buttonSecond.style.opacity = '1';
        buttonThird.style.opacity = '0.5';
        buttonFourth.style.opacity = '0.5';

        body.style.background = 'linear-gradient(rgb(217, 219, 222), rgb(177, 183, 187), rgb(156, 161, 165))';

  
    });
    buttonThird.addEventListener('click', () => {
        tabs[0].style.display='none';
        tabs[1].style.display='none';
        tabs[2].style.display='block';
        tabs[3].style.display='none';

        buttonOne.style.borderBottom = 'none';
        buttonSecond.style.borderBottom = 'none';
        buttonThird.style.borderBottom = '1px solid black';
        buttonFourth.style.borderBottom = 'none';

        buttonOne.style.opacity = '0.5';
        buttonSecond.style.opacity = '0.5';
        buttonThird.style.opacity = '1';
        buttonFourth.style.opacity = '0.5';
        body.style.background = 'linear-gradient(rgb(140, 171, 194), rgb(78, 76, 61), rgb(147, 167, 182))';
        
    });
    buttonFourth.addEventListener('click', () => {
        tabs[0].style.display='none';
        tabs[1].style.display='none';
        tabs[2].style.display='none';
        tabs[3].style.display='block';

        buttonOne.style.borderBottom = 'none';
        buttonSecond.style.borderBottom = 'none';
        buttonThird.style.borderBottom = 'none';
        buttonFourth.style.borderBottom = '1px solid black';

        buttonOne.style.opacity = '0.5';
        buttonSecond.style.opacity = '0.5';
        buttonThird.style.opacity = '0.5';
        buttonFourth.style.opacity = '1';

        body.style.background = 'linear-gradient(rgb(106, 178, 218), rgb(0, 126, 147), rgb(0, 127, 163))';
    });

    showTab(0);