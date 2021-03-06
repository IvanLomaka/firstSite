<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">

    <!-- font google -->
    <link
      href="https://fonts.googleapis.com/css2?family=Heebo:wght@500;700&family=Lobster&display=swap"
      rel="stylesheet"
    />
    <link 
      href="https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap" 
      rel="stylesheet"
    />
    <link 
      href="https://fonts.googleapis.com/css2?family=B612&display=swap" 
      rel="stylesheet"
    />

    <!-- icona sito -->
    <link 
      rel="icon" 
      href="../images/scimmia.jpg" 
      type="image/gif"
    />

    <!-- css di bootstrap -->
    <link rel="stylesheet" href="bootstrap.css">
    <title>Contact Us Form In Php</title>
    <style>

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    main {
        font-family: "Heebo", sans-serif!important;
    }

    .landing {
        padding: 0;
    }

    nav {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        min-height: 10vh;
        padding: 0 5vh;
        position: fixed;
        transition: 0.5s;
        color: black;
        margin-bottom: 50px!important;
        margin-top: 30px!important;
    }

    .nav-scrolled {
        top: 0;
        left: 0;
        right: 0;
        min-height: 7vh;
        background-color: white;
        border-bottom: 1px #dedede solid;
        z-index: +1;
        position: absolute;
        position: fixed;
    }

    .nav-links {
        display: flex;
        list-style: none;
    }

    .nav-links li {
        text-align: right;
        padding-left: 10rem;
        font-size: 1.2rem;
    }

    .alpha {
        color: black;
    }

    #logo {
        font-family: "Lobster", cursive;
        font-weight: lighter;
        font-size: 2rem;
    }

    .intro-text {
        color: rgb(233, 233, 233);
        font-family: "heebo", sans-serif;
        font-size: 3rem;
    }

    .hide {
        background-color: black;
        overflow: hidden;
    }

    .hide span {
        transform: translateY(100%);
        display: inline-block;
    }

    a {
        color: black;
        text-decoration: none!important;
    }

    a:hover {
        color: black!important;
    }

</style>
</head>
<body>

    <!-- navigazione -->
    <nav>
        <a href="../index.html"><h1 id="logo">Tropical</h1></a>
        <ul class="nav-links">
          <a href="../index.html#foreste"><li>Le foreste</li></a>
          <a href="../index.html#deforestazione"><li>La deforestazione</li></a>
          <a href="index.php"><li>Contatti</li></a>
        </ul>
    </nav>

    <!-- corpo della pagina -->
    <div class="container">
        <div class="row">
            <div class="col-lg-6 m-auto">
                <div class="card mt-5" style="margin-top: 50%!important; overflow: hidden;">
                    <div class="card-title">
                        <h2 class="text-center py-2"> Contact Us </h2>
                        <hr>
                        <!-- messaggio di successo e di non -->
                        <?php 
                            $Msg = "";
                            if(isset($_GET['error']))
                            {
                                $Msg = " Per favore riempi gli spazi bianchi ";
                                echo '<div class="alert alert-danger">'.$Msg.'</div>';
                            }

                            if(isset($_GET['success']))
                            {
                                $Msg = " Il tuo messaggio ?? stato mandato! ";
                                echo '<div class="alert alert-success">'.$Msg.'</div>';
                            }
                        ?>
                    </div>
                    <div class="card-body">
                        <form action="process.php" method="post">
                            <input type="text" name="UName" placeholder="User Name" class="form-control mb-2">
                            <input type="email" name="Email" placeholder="Email" class="form-control mb-2">
                            <input type="text" name="Subject" placeholder="Subject" class="form-control mb-2">
                            <textarea name="msg" class="form-control mb-2" placeholder="Write The Message"></textarea>
                            <button class="btn btn-success" name="btn-send"> Send </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>
</html>