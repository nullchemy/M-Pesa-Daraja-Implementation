<?php
    $key = "YOUR_CONSUMER_KEY_HERE";
    $secret = "YOUR_CONSUMER_SECRET";

    //** get access token **//
    $headers = ['Content-Type:application/json; charset=utf8'];
    $url = 'https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials';
    $curl = curl_init($url);

    curl_setopt($curl, CURLOPT_HTTPHEADER, $headers);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, TRUE);
    curl_setopt($curl, CURLOPT_HEADER, FALSE);
    curl_setopt($curl, CURLOPT_USERPWD, $key.':'.$secret);
    $result = curl_exec($curl);
    $status = curl_getinfo($curl, CURLINFO_HTTP_CODE);
    $result = json_decode($result);
    $access_token = $result->access_token; 

    $ch = curl_init('https://sandbox.safaricom.co.ke/mpesa/b2c/v1/paymentrequest');
    curl_setopt($ch, CURLOPT_HTTPHEADER, [
        'Authorization: Bearer '.$access_token,
        'Content-Type: application/json'
    ]);
    $cred_data = array(
        "InitiatorName" => "testapi",
        "SecurityCredential" => "",
        "CommandID" => "BusinessPayment",
        "Amount" => 1,
        "PartyA" => 600998,
        "PartyB" => 254708374149,
        "Remarks" => "Test remarks",
        "QueueTimeOutURL" => "https://mydomain.com/b2c/queue",
        "ResultURL" => "https://mydomain.com/b2c/result",
        "Occassion" => ""
    );
    $data = json_encode($cred_data);
    curl_setopt($ch, CURLOPT_POST, 1);
    curl_setopt($ch, CURLOPT_POSTFIELDS, $data);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    $response     = curl_exec($ch);
    curl_close($ch);
    echo $response;
?>