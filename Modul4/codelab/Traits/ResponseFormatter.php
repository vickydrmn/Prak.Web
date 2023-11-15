<?php
namespace Traits;
//Untuk json response
trait ResponseFormatter{
    public function responseFormatter($code, $message, $data = null){
        return json_encode([
            "code" => $code,
            "message" => $message,
            "deta" => $data
        ]);
    }
}