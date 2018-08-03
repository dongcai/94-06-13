<?php
$topic      = isset( $_GET['topic'] ) ? trim( $_GET['topic'] ) : "php";
$reddit_url = "https://www.reddit.com/r/" . urlencode( $topic ) . ".json";
$result     = file_get_contents( $reddit_url );

$result_arr = json_decode( $result, TRUE );
$data       = isset( $result_arr['data'] ) ? $result_arr['data']['children']
	: NULL;

$topics = [ 'php', 'jquery', 'reactjs' ];

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <title>94-06-13</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css">
    <link rel="stylesheet" href="/css/main.css">

</head>
<body>

<nav class="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
    <a class="navbar-brand" href="/">94-06-13</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse"
            data-target="#navbarsExampleDefault"
            aria-controls="navbarsExampleDefault" aria-expanded="false"
            aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarsExampleDefault">
        <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
                <a class="nav-link" href="../old-school/">Old School <span
                            class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="../still-cool/">Still Cool</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="../super-cool/">Super Cool</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="../super-cool-plus/">Super Cool Plus</a>
            </li>
        </ul>
    </div>
</nav>

<main role="main" class="container">

    <div class="web-revolution">
        <h1>Revolution of Dynamic Website - Reload Way</h1>

        <div id="topic">
            <form method="get">
                <div className="form-group">
                    <label>
                        Pick your favorite topic:
                        <select class="form-control" name="topic"
                                onchange="this.form.submit()">
							<?php
							foreach ( $topics as $opt ) {
								$selected = ( $opt == $topic ) ? " selected"
									: "";
								echo '<option value=' . $opt . $selected . '>'
								     . $opt . '</option>';
							}
							?>
                        </select>
                    </label>
                </div>
            </form>
        </div>

        <div id="root">
            <ul>
				<?php
				foreach ( $data as $feed ) {
					$post = $feed['data'];
					echo '<li><a href="' . $post['url'] . '" target="_blank">'
					     . $post['title'] . '</a></li>';
				}
				?>
            </ul>
        </div>
    </div>

    <h4>Source Code</h4>
    <script src="https://gist.github.com/dongcai/8a8461d9ee8cbd1db33f8a9b359f05c0.js"></script>

</main><!-- /.container -->

</body>
</html>



