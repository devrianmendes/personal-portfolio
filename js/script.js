function initCursorBlink() {
    const cursor = document.querySelector('.cursor');

    function animaCursor() {
        cursor.classList.toggle('ativo');
    }
    setInterval(animaCursor, 500);
}

function autoResizeTextarea() {
        const txt = document.querySelector('#mensagem');
        const maxLng = txt.getAttribute('maxlength');
        const spanContent = document.querySelector('.form-wrapper span')
        const leftLng = maxLng - txt.value.length;
        
        while (txt.scrollHeight > txt.offsetHeight)
        {
            txt.rows += 1;
        }
        if (txt.value.length <= 42) {
            txt.rows = 1;
        }
        spanContent.innerText = leftLng;
}

function sidebar() {
    const hamburguer = document.querySelector('.hamburguer');
    const sidebar = document.querySelector('.sidebar');
    const item = document.querySelectorAll('.menu-link');


    function closeLink() {
        sidebar.classList.remove('show-menu');
        hamburguer.classList.remove('show-menu');
    }

    function closeSidebar() {
        if(window.innerWidth >= 992) {
            sidebar.classList.remove('show-menu');
            hamburguer.classList.remove('show-menu');
        }
    }

    function sidebarToggle() {
        sidebar.classList.toggle('show-menu');
        hamburguer.classList.toggle('show-menu');
    }
    
    item.forEach((item) => {
        item.addEventListener('click', closeLink);
    })
    window.addEventListener('resize', closeSidebar);
    hamburguer.addEventListener('click', sidebarToggle);
}

function topLink() {
    const top = document.querySelector('.top');
    const about = document.querySelector('.about');    

    function checkDist() {
        const aboutDist =  about.getBoundingClientRect();

        if(aboutDist.top < 542) {
            top.classList.add('top-invisible');
        } else {
            top.classList.remove('top-invisible');
        }
    }


    window.addEventListener('scroll', checkDist);

}

function goToSectionTop() {
    
    const linkSidebar = document.querySelectorAll('.menu-link');
    const linkButton = document.querySelectorAll('.button-link');
    const buttonTop = document.querySelector('.top');
    const linkNavbar = document.querySelectorAll('.menu ul a');

    
    function toSectionTop(item) {
        item.preventDefault();
        
        const href = item.currentTarget.getAttribute('href');
        const section = document.querySelector(href);
        const topo = section.offsetTop;
        
        
        window.scrollTo(0, topo - 100)
    }
    
    linkSidebar.forEach((item) => {
        item.addEventListener('click', toSectionTop)
    })
    linkButton.forEach((item) => {
        item.addEventListener('click', toSectionTop)
    })
    buttonTop.addEventListener('click', () => {
        window.scrollTo(0, 0)
    });
    linkNavbar.forEach((item) => {
        item.addEventListener('click', toSectionTop)
    })
}

function borderHeight () {
    const icon = document.querySelectorAll('.icon');


    function heightTimeout() {
        setTimeout(heightDetect, 100)
    }

    function heightDetect () {
        const modalY = document.querySelector('.modal-ativo .border').offsetHeight;
        const modalX = document.querySelector('.modal-ativo .border').offsetWidth;
        const borda2 = document.querySelector('.modal-ativo .borda-2');
        const borda3 = document.querySelector('.modal-ativo .borda-3');
        const borda1 = document.querySelector('.modal-ativo .borda-1');
        const borda4 = document.querySelector('.modal-ativo .borda-4');

        borderHeight =  modalY * .7;
        borderWidth =  modalX * .7;

        borda2.style.height = `${borderHeight}px`;
        borda3.style.height = `${borderHeight}px`;

        borda1.style.width = `${borderWidth}px`;
        borda4.style.width = `${borderWidth}px`;
        }

    icon.forEach((item) => {
        item.addEventListener('mouseup', heightTimeout)
    })


}

initCursorBlink();
initModal();
autoResizeTextarea();
sidebar();
topLink();
goToSectionTop();
borderHeight();
