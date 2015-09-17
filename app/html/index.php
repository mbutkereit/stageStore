<?php
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpKernel\Exception\BadRequestHttpException;

require_once __DIR__.'/../vendor/autoload.php';

$app = new Silex\Application();


$app->register(new Silex\Provider\DoctrineServiceProvider(), array(
    'db.options' => array(
        'driver'   => 'pdo_sqlite',
        'path'     => __DIR__.'/app.db',
    ),
));


$app->get('/', function () use ($app){

});

$app->get('/customer', function () use ($app){
    $post = $app['db']->fetchAll('SELECT * FROM customer');
    $response = $app->json($post);
    $responseHeaders = $response->headers;
           $responseHeaders->set('Access-Control-Allow-Origin', '*');
        $responseHeaders->set('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, PATCH, OPTIONS');
    return $response;
});
$app->match('/customer', function () use ($app){
    $post = array();
    $response = $app->json($post);
    $responseHeaders = $response->headers;
    $response->headers->set('Access-Control-Allow-Headers', 'origin, content-type, accept');
           $responseHeaders->set('Access-Control-Allow-Origin', '*');
        $responseHeaders->set('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, PATCH, OPTIONS');
    return $response;
})->method('OPTIONS');

/**
 *
 * Get Customer entry
 *
 *
 */
$app->get('/customer/{id}', function ($id) use ($app){
    $sql = "SELECT * FROM customer WHERE shortname = ?";
    $post = $app['db']->fetchAssoc($sql, array((int) $id));
	return 'Hello!';
});

/**
 *
 * Create a new Customer entry.
 * 201
 *
 */
$app->post('/customer', function (Request $request) use ($app) {
  $response = new Response();
 $response->setStatusCode(201);
  $responseHeaders = $response->headers;
         $responseHeaders->set('Access-Control-Allow-Origin', '*');
      $responseHeaders->set('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, PATCH, OPTIONS');
      try{
        $content = $request->getContent();

 if(empty($content)){

     throw new BadRequestHttpException("Content is empty");
 }

        $value = json_decode($content);
 if(isset($value->shortname)){
        $app['db']->insert('customer', array(
          'shortname'=>$value->shortname,
  		    'title'=>$value->title,
  	      	    'production_url'=> $value->production_url,
          	    'quality_url'=> $value->quality_url,
  		    'staging_url'=> $value->staging_url
 ));}
      }catch(\Exception $e){
         $response->setStatusCode(422);
      }
  return $response;
});

/*
 *
 * Update Customer entry.
 *
 */
$app->patch('/customer', function () {
	   $sql = "UPDATE posts SET value = ? WHERE id = ?";
    $app['dbs']['mysql_write']->executeUpdate($sql, array('newValue', (int) $id));
    return 'Hello!';
});



/**
 *
 * Remove Customer entry.
 *
 */
$app->delete('/customer', function () {
    return 'Hello!';
});




$app->run();
