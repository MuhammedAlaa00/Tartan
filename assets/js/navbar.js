document.write(`<nav class="navbar navbar-expand-lg">
<div class="container-fluid">
    <a class="navbar-brand" href="#">
        <img src="./assets/img/Group 590.png" alt="" srcset="" />
    </a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <i class="fas fa-bars"></i>
    </button>
    <!-- language icon show small screen-->
    <div class="lang-icon-small">
        <a href="#lang">
            <img src="./assets/img/subject.svg" alt="" srcset="" />
        </a>
    </div>
    <!-- language icon show small screen-->
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto">
            <li class="nav-item active drop_slide position-relative">
                <a class="nav-link" href="#home">Home</a>
            </li>
            <li class="nav-item drop_slide position-relative">
                <a class="nav-link" href="#about">about</a>
            </li>
            <li class="nav-item drop_slide position-relative">
                <a class="nav-link" href="#section">section</a>
            </li>
            <li class="nav-item drop_slide position-relative">
                <a class="nav-link" href="#search">search</a>
            </li>
            <li class="nav-item drop_slide position-relative">
                <a class="nav-link" href="#contact">contact</a>
            </li>
            <li class="nav-item dropDown position-relative">
                <a class="nav-link" href="#">login</a>
                <div class="drop">
                    <div class="d-flex mb-1 dropdown_part">
                        <div class="header_drop_icon"><img src="./assets/img/user.svg" alt="" /></div>
                        <div class="drop_link"><a class="dropdown-item" href="#">your profile</a></div>
                    </div>
                    <div class="dropdown-divider"></div>
                    <div class="d-flex mb-1 dropdown_part">
                        <div class="header_drop_icon"><i class="fas fa-users"></i></div>
                        <div class="drop_link"><a class="dropdown-item" href="#">user</a></div>
                    </div>
                    <div class="d-flex mb-1 dropdown_part">
                        <div class="header_drop_icon"><i class="fas fa-user-alt"></i></div>
                        <div class="drop_link"><a class="dropdown-item" href="#">admin</a></div>
                    </div>
                </div>
            </li>
            <!-- language icon show large screen-->
            <li class="lang-icon-big">
                <a href="#lang"><img src="./assets/img/subject.svg" alt="" srcset="" /></a>
            </li>
            <!-- language icon show large screen-->
        </ul>
    </div>
</div>
</nav>`)