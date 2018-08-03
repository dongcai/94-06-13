<?php

$topic      = isset( $_GET['topic'] ) ? trim( $_GET['topic'] ) : "php";
$reddit_url = "http://www.reddit.com/r/" . urlencode( $topic ) . ".json";
$data       = file_get_contents( $reddit_url );
header( 'Content-Type: application/json' );
echo $data;


