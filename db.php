<?php
if(isset($_POST['delete'])){
    $name = $_POST['name'];

$myconnect = mysqli_connect('localhost','root','','bookingcalendar');
$up_query = "DELETE * FROM bookings WHERE name = '$name'";
//echo($name.$iid);   
if(!mysqli_query($myconnect,$up_query)){
    echo "record not deleted";
}
}
?>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>BOOK YOUR appointment</title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Acme&family=Merriweather:ital,wght@1,300&family=Montagu+Slab&display=swap');
        *{
            margin: 0;
            padding : 0;
        }
        body{
                background: url(https://thumbs.dreamstime.com/b/beauty-salon-black-work-tools-comb-hair-dress-coloring-stone-background-top-view-mock-up-desk-98821172.jpg);
                background-size: 100%;
                background-repeat: no-repeat;
        }

        div.main{
            width: 500px;
            position:relative;
            left:900px;
            top:60px;
        }

        h2{
            text-align: center;
            font-size:37px;
            padding:15px;
            font-family: 'Merriweather', serif;
        }

        div.register{
            background-color:rgba(0,0,0,0.8);
            width: 100%;
            border-radius: 10px;
            box-shadow:2px 2px 15px rgba(0,0,0,0.3);
            color:#fff;
            height:600px;
        }

        form#register{
            margin: 40px;
            position:relative;
            top:-10px;
        }

        label{
            font-family: 'Times New Roman', Times, serif;
            font-size: 27px;
            font-style: bold;
            padding-bottom:15px;
            line-height:60px;
        }

        input#male{
            width:300px;
            height:30px;
        }

        input#name{
            width: 300px;
            border: 1px solid #ddd;
            border-radius: 3px;
            outline: 0;
            padding: 7px;
            background-color: #fff;
            box-shadow: inset 1px 1px 5px rgba(0,0,0,0.3);
        }

        input#submit{
            width: 200px;
            border-radius:10px;
            background-color:grey;
            font-size:25px;
            padding:7px;
            color:white;
            position:relative;
            top:40px;
            left:20px;
            cursor:pointer;
           
        }
        label,h2{
            text-shadow: 1px 1px 5px rgba(0,0,0,0.3);
        }
        
    </style>
</head>
<body>
    <div class="main">
        <div class ="register">
            <h2> Register Here</h2>
            <form action="insert.php" method="post" id = "register">
        <label>Enter your Name : </label><br><input type="text"  id ="name"   name = "name"  placeholder="Enter your name"><br>
        <label >Enter your Contact Number : </label><br><input type="number" id="name"  name = "number"  placeholder="Contact number "><br>
        <label  >Enter the Date : </label><br><input type="date" id="male" name ="date" ><br>
        <label >Enter Time : </label><br><input type="time" id = "male" name = "time"><br>
        <input type="submit" id = "submit" value="BOOK" name = "insert">
        <input type="submit" id = "submit" value="ADMIN" name = "display">
    </form>

        </div>

    </div>
</body>

</html>