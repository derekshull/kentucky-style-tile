<template>
	<div id="app">
		<header>
			<button class="js-menu-show header__menu-toggle material-icons" title="open the navigation menu">menu</button>
		</header>

		<aside class="js-side-nav side-nav">
				<nav class="js-side-nav-container side-nav__container">
					<button class="js-menu-hide side-nav__hide material-icons" title="close the navigation menu">close</button>
					<div class="side-nav__header">
						<router-link class="logo-link js-side-nav__link" to="/">
							<span class="logo-name">Style Guide</span> 
						</router-link>
					</div>
					<ul class="side-nav__content">
						<li><router-link class="js-side-nav__link" to="/grid">Grid System</router-link></li>
					</ul>
				</nav>
			</aside>
		<router-view></router-view>
	</div>
</template>

<script>
	export default {
		name: "app",
		watch: {
			$route() {
				document.getElementsByClassName("mdl-layout").scrollTop = 0;
			},
		},
	};
</script>

<style lang="scss">
	/* Background pattern from Subtle Patterns */

	$color1: rgb(95, 11, 63);
	$color2: rgb(154, 6, 32);
	$color3: rgb(227, 100, 21);
	$color4: rgb(85, 65, 56);
	$color5: rgb(17, 76, 92);

	@font-face {
		font-family: 'mathleteskinny';
		src: url('/static/Mathlete-Skinny-webfont.eot');
		src: url('/static/Mathlete-Skinny-webfont.eot?#iefix') format('embedded-opentype'),
			url('/static/Mathlete-Skinny-webfont.woff') format('woff'),
			url('/static/Mathlete-Skinny-webfont.ttf') format('truetype'),
			url('/static/Mathlete-Skinny-webfont.svg#mathleteskinny') format('svg');
		font-weight: normal;
		font-style: normal;
	}

	html, body {
		padding:0;
		margin:0;
		font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		color: #383838;
		font-size:16px;
		line-height:30px;
	}

	* {
		box-sizing: border-box;
	}

	h1 {
		font-size: 67px;
		margin: 15px 0px 5px;
		font-family: "mathleteskinny", Helvetica;
		color: $color5;
		font-weight: 100;
		line-height:50px;
	}

	h2 {
		font-size: 26px;
		margin: 8px 0px;
		color: #77716d;
		font-family: 'Julius Sans One', "Helvetica Neue", Helvetica, Arial, sans-serif;
		font-weight:200;
	}

	h3 {
		font-size: 26px;
		margin: 10px 0px;
		color: rgb(141, 0, 0);
	}

	h4 {
		font-size: 22px;
		margin: 5px 0px;
	}

	.nav-right {
		display:flex;
		align-items: center;
		justify-content: flex-end;
		width:100%;
		margin-right:10px;
	}

	.nav-right a {
		display:flex;
		align-items: center;
		justify-content:center;
		color:inherit;
		text-decoration:none;
	}

	.logo-name {
		font-size: 24px;
	}

	.logo-head {
		border-radius: 50px;
		width:40px;
		height:40px;
		margin-left:10px;
	}

	.iframe-container {
		text-align:center;
		position: relative;
		padding-bottom: 56.25%;
		padding-top: 35px;
		height: 0;
		overflow: hidden;
		margin-bottom:20px;
	}

	.iframe-container iframe {
		position: absolute;
		top:0;
		left: 0;
		width: 100%;
		height: 100%;
	}

	header {
		width: 100%;
		height: 56px;
		background: #f6f2f1;
		color: black;
		display: flex;
		flex-direction: row;
		align-items: center;
	}

	.header__menu-toggle {
		background: none;
		border: none;
		width: 50px;
		height: 50px;
		padding: 0;
		margin: 0;
		color: black;
	}

	.side-nav {
		position: fixed;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		overflow: hidden;
		pointer-events: none;
		z-index:1;
	}

	.side-nav--visible {
		pointer-events: auto;
	}

	.side-nav::before {
		content: '';
		display: block;
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		background: rgba(0,0,0,0.4);
		opacity: 0;
		will-change: opacity;
		transition: opacity 0.3s cubic-bezier(0,0,0.3,1);
	}

	.side-nav__container {
		position: relative;
		width: 90%;
		max-width: 400px;
		background: #FFF;
		height: 100%;
		box-shadow: 2px 0 12px rgba(0,0,0,0.4);
		transform: translateX(-102%);
		display: flex;
		flex-direction: column;
		will-change: transform;
	}

	.side-nav--animatable .side-nav__container {
		transition: transform 0.13s cubic-bezier(0,0,0.3,1);
	}

	.side-nav--visible.side-nav--animatable .side-nav__container {
		transition: transform 0.33s cubic-bezier(0,0,0.3,1);
	}

	.side-nav--visible::before {
		opacity: 1;
	}

	.side-nav--visible .side-nav__container {
		transform: none;
	}

	.side-nav__hide {
		position: absolute;
		left: 16px;
		top: 16px;
		background: none;
		border: none;
		color: #FFF;
		width: 24px;
		height: 24px;
		padding: 0;
		margin: 0;
	}

	.side-nav__header {
		height: 75px;
		background: #2196F3;
		color: #FFF;
		display: flex;
		padding: 16px;
		align-items: flex-end;
		justify-content:center;
		font-size: 24px;
	}

	.side-nav__header a {
		display:flex;
		align-items: center;
		justify-content:center;
		color:inherit;
		text-decoration:none;
	}

	.side-nav__content {
		padding-top: 32px;
		flex: 1;
		list-style: none;
		padding: 0;
		margin: 0;
		overflow-x: hidden;
		overflow-y: auto;
		-webkit-overflow-scrolling: touch;
	}

	.side-nav__content a {
		text-decoration: none;
		color:black;
	}

	.side-nav__content li {
		height: 48px;
		line-height: 48px;
		padding: 0 16px;
		font-size:20px;
		text-align:center;
	}

	.side-nav__content li:hover {
		background: #CCC;
	}

	.bg-gray {
			background:#f8f8f8;
	}

	.cta {
		background: #03a9f4;
		font-size: 20px;
		color: white;
		font-weight: bold;
		border: 0px;
		border-radius: 5px;
		padding: 7px 20px;
		box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
		transition: box-shadow 0.3s cubic-bezier(.25,.8,.25,1);
		text-decoration: none;
		display:block;
		cursor:pointer;
	}

	.cta:visited {
		text-decoration: none;
		color: white;
	}

	.cta:hover {
		box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
	}

	.cards {
		padding:0px;
		margin:0px;
		list-style:none;
		display:flex;
		flex-wrap:wrap;
		justify-content: space-around;
	}

	.card {
		width: 100%;
		max-width:500px;
		padding:20px 10px;
	}

	.card-container {
		box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
		transition: box-shadow 0.3s cubic-bezier(.25,.8,.25,1);
		border-radius: 5px;
		margin: 10px 0px;
		background:white;
		display:flex;
		flex-direction:column;
		justify-content:space-between;
		height:100%;
	}

	.card-container:hover {
		box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
	}

	.card .card-photo {
		font-size: 26px;
		font-weight: 500;
		padding: 30px 15px;
		-webkit-animation: slide 30s linear infinite;
	}

	.card .card-photo.inverted {
		color:white;
	}

	.card .card-text {
		padding:0px 15px;
	text-align:left;
	}

	.card .card-cta-container {
		padding:10px;
		border-top: 1px solid #e2e2e2;
		text-align:left;
		display:flex;
		align-items:center;
	}

	.card .card-tags {
		display:flex;
		justify-content: flex-end;
		width:70%;
		flex-wrap: wrap;
	}

	.card .card-tag {
		padding: 5px 15px;
		background: #03a9f4;
		color: white;
		border-radius: 15px;
		margin:5px 10px;
	}

	.card .card-cta {
		color: #ffab40;
		text-decoration: none;
		font-size:21px;
	font-weight: 600;
		display: block;
	width: 35%;
	}

	.card .card-cta:hover {
		color: #ffd8a6;
		text-decoration: none;
	}

	@media(min-width:1101px) {
		.card {
			width: calc(100% / 3);
		}
	}
</style>
