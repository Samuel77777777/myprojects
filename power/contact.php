<?php

 include 'config.php';

if(isset($_POST['ave'])){
    $ame=$_POST['ame'];
    $email=$_POST['email'];
    $phone=$_POST['phone'];
    $message1=$_POST['message1'];


    $sql_post="INSERT INTO contact (ame,email,phone,message1)
    VALUES('$ame','$email','$phone','$message1')";

    if(mysqli_query($conn,$sql_post)){
        echo '<script>alert("Thanks for reaching out to us")</script>'; 
      //   header('location:display.php');
    }else{
        die(mysqli_error($con));
    }


}


?>






















<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    
   <!-- font awesome cdn link  -->
   <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">

   <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/lightgallery-js/1.4.0/css/lightgallery.min.css">

   <link rel="stylesheet" href="https://unpkg.com/swiper@7/swiper-bundle.min.css" />

   <!-- custom css file link  -->
   <link rel="stylesheet" href="style.css">
</head>
<body>

<header class="header">

<a href="#" class="logo">S<span>olar</span></a>

<nav class="navbar">
   <a href="index.html">home</a>
   <a href="about.html">about</a>
   <a href="services.html">services</a>
   <a href="product.html">product</a>
   <a href="contact.php">contact</a>

</nav>

<div class="icons">
     
 <a href="login.php"> <div id="login-btn" class="fas fa-user"></div> </a>
</div>



</header>
 
<section class="contact" id="contact">

   <h1 class="heading"> contact us </h1>

   <div class="row">

      <iframe class="map" src="https://www.google.com/maps/embed?pb=!ss" allowfullscreen="" loading="lazy"></iframe>

      <form method="post" action="">
         <h3>get in touch</h3>
         <input type="text" placeholder="name" class="box" name="ame">
         <input type="email" placeholder="email" class="box" name="email">
         <input type="number" placeholder="phone" class="box" name="phone">
         <textarea name="message1" id="" cols="30" rows="10" placeholder="message"></textarea>
         <!-- <input type="text" placeholder="message" class="box" name="message1"> -->
         <input type="submit" value="send message" class="btn" name="ave" >
      </form>

   </div>

</section>




 
<footer class="footer">
    <h1>power</h1>
    <div class="contain">
       <div class="raw">
          <div class="footer-col">
             <h4>company</h4>
             <ul>
                <li><a href="about.php">about us</a></li>
                <li><a href="services.php">our services</a></li>
                <li><a href="#">privacy policy</a></li>
                <li><a href="#">affiliate program</a></li>
             </ul>
          </div>
          <div class="footer-col">
             <h4>get help</h4>
             <ul>
                <li><a href="#">FAQ</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">returns</a></li>
                <li><a href="#">order status</a></li>
             </ul>
          </div>
         
          <div class="footer-col" >
             <h4>follow us</h4>
             <div class="social-links">
                <a href="https://www.facebook.com/Solar-power-114117037958503"><i class="fab fa-facebook-f"></i></a>
                <a href="https://twitter.com/bkoroma8"><i class="fab fa-twitter"></i></a>
                <a href="https://www.instagram.com/bkoromasamuel/?hl=en"><i class="fab fa-instagram"></i></a>
                <a href="https://www.linkedin.com/in/samuel-b-koroma-2a432322b/"><i class="fab fa-linkedin-in"></i></a>
             </div>
          </div>
       </div>
    </div>
 </footer>
 



 
    
   <script src="script.js"></script> 
</body>
</html>