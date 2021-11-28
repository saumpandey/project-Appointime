<html>
    <head>
        <title>
            Dashboard
        </title>
        <style>
            table#crv{
                border: 1px solid black;
            }
            td{
                border: 1px solid black;
            }
        </style>
    </head>
    <body>
    </body>
</html>
<?php
$name = $_POST['name'];
$number = $_POST['number'];
$date = $_POST['date'];
$time = $_POST['time'];
if(isset($_POST['insert'])){ 
    $connection = mysqli_connect('localhost','root',"",'bookingcalendar');
    if(!$connection){
        echo "server not connected";
    }
    $duplicate = mysqli_query($connection,"SELECT * FROM bookings where time = '$time'");
    $duplicate_2 = mysqli_query($connection,"SELECT * FROM bookings where date = '$date'");
    if(mysqli_num_rows($duplicate_2)> 0 and mysqli_num_rows($duplicate) > 0){
        echo "<h1 style='font-size:100px; text-align:center; position:relative; top:150px;'>OOPS!</h1><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdkjfZ29mnuTsEz3abnJXZysaj504Lslezjg&usqp=CAU' style=' position:relative; left:950px; top:-90px;'/>
         <p style='font-size:30px; font-style:italic; position:relative; top:-90px;left:300px;'>An appointment is already booked at this time. Please select any other time slot.</p>";
    }
    else{
    $sql = "INSERT INTO bookings (name,date,time,number) VALUES ('$name','$date','$time','$number')";
    if (mysqli_query($connection,$sql)) {
        echo "<center><h1 style='margin:40px; font-size:70px;'> YAY!<h1/> <img src='https://cdn.pixabay.com/photo/2019/02/19/19/45/thumbs-up-4007573_640.png' style='position:relative;width:150px;height:120px;top:-140px;left:170px;'/> <p style='font-size:30px; font-style:italic; position:relative; top:-130px;'> Your Appointment has been booked on Date : <span style='color: brown;'> $date </span> and Time  <span style='color: brown;'> $time </span> <p/></center>";
        $query = "SELECT * FROM bookings where name = '$name'";
        $data2 = mysqli_query($connection,$query);
        if (mysqli_num_rows($data2)>0) {
            while($row = mysqli_fetch_array($data2)){
                echo "<center><table id = 'crv'><tr><form  method = post>";
                echo "<h3><td><input  type = text name = id readonly value='".$row['id']."'></td></h3>";
                echo "<h3><td><input  type = text name = name readonly value = '".$row['name']."'></td></h3>";
                echo  "<h3><td><input type = number name = number readonly value = '".$row['number']."'></td></h3>";
                echo  "<h3><td><input type = date name = date readonly value = '".$row['date']."'></td></h3>";
                echo  "<h3><td><input type = time name = time readonly value = '".$row['time']."'></td></h3>";
    
               // echo "<td><input type= submit name=update value=Update></td>";
                echo"</form></tr></table><center>";
            }
        }
         
    }
    else{
        echo " data not inserted";
    }
}
}
if(isset($_POST['display'])){
    $name1 = 'saum';
    $id1 = '205001';
    $name = $_POST['name'];
    $id = $_POST['number'];
    if($name1 == $name and $id1 == $id){
        
    $connection = mysqli_connect('localhost','root',"",'bookingcalendar');
    if(!$connection){ 
        echo "connection not created";
    }
    $sql_query = "SELECT * FROM bookings";
    $data = mysqli_query($connection,$sql_query);
    if (mysqli_num_rows($data)>0) {
        while($row = mysqli_fetch_array($data)){
            echo "<center><table><tr><form action = db.php  method = post>";
            echo "<td><input  type = text name=id readonly value='".$row['id']."'></td>";
            echo "<td><input  type = text name = name readonly value = '".$row['name']."'></td>";
            echo  "<td><input type = number name = number readonly value = '".$row['number']."'></td>";
            echo  "<td><input type = date name = date readonly value = '".$row['date']."'></td>";
            echo  "<td><input type = time name = time readonly value = '".$row['time']."'></td>";

           echo "<td><input type= submit name=delete value=cancel></td>";
            echo"</form></tr></table></center>";
        }
    }
    else{
        echo "no record found";
    }
    }
    else{
        echo"<center><h1 style='font-size:50px; text-align:center; position:relative; top:200px;'>This Page is only for ADMIN</h1> <p style='font-size:30px; position:relative; top:200px;'>Please enter valid ID and Password</p></center>";
    }
}



// if (isset($_POST['admin'])){
//     $connection = mysqli_connect('localhost','root',"",'bookingcalendar');
//     if(!$connection){ 
//     echo "connection not created";
//     }
//     $sql_query = "SELECT * FROM bookings";
//     $data = mysqli_query($connection,$sql_query);
//     if (mysqli_num_rows($data)>0) {
//     while($row = mysqli_fetch_array($data)){
//             echo "<tr><form action= update.php method = post>";
//             echo "<td><input  type = text name=id  value='".$row['ID']."'></td>";
//             echo "<td><input  type = text name = name readonly value = '".$row['name']."'></td>";
//             echo  "<td><input type = number name = marks readonly value = '".$row['number']."'></td>";
//             echo  "<td><input type = date name = date readonly value = '".$row['date']."'></td>";
//             echo  "<td><input type = time name = time readonly value = '".$row['time']."'></td>";

//             echo "<td><input type= submit name=update value=Update></td>";
//             echo"</form></tr>";
//         }
//     }
//     else{
//         echo "no record found";
        
//     }

//     if(isset($_POST['delete'])){
//         $name = $_POST['name'];
//     $iid = $_POST['number'];
//     $myconnect = mysqli_connect('localhost','root','','bookingcalnedar');
//     $up_query = "update bookings set name = $name where number= $iid";
//     //echo($name.$iid);   
//     if(mysqli_query($myconnect,$up_query)){
//         echo "record updated";
//     }
//     else{
//         echo "record not updated";
//     } 
//     }
// }

?>
