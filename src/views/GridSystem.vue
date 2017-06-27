<template>
	<div class="wrapper">
		<div class="row">
			<div class="col-xs-12">
				<h1>Grid System</h1>
				<p>
					Our grid system is composed of 12 flexible columns with a gutter between columns of 1rem. We apply border-box so that the border and padding is included in the width of the grid columns.
				</p>
			</div>
		</div>

		<div class="row">
			<div class="col-xs-12">
				<h3>Grid Sizes</h3>
			</div>
		</div>

		<div class="row">
			<div class="col-xs-12">
				<h4>1 Column</h4>
				<div class="row">
					<div class="col-xs-12 example-grid">
						<div class="box">
							col-xs-12
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="row">
			<div class="col-xs-12">
				<h4>2 Columns</h4>
				<div class="row">
					<div class="col-xs-6 example-grid">
						<div class="box">
							col-xs-6
						</div>
					</div>
					<div class="col-xs-6 example-grid">
						<div class="box">
							col-xs-6
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="row">
			<div class="col-xs-12">
				<h4>3 Columns</h4>
				<div class="row">
					<div class="col-xs-4 example-grid">
						<div class="box">
							col-xs-4
						</div>
					</div>
					<div class="col-xs-4 example-grid">
						<div class="box">
							col-xs-4
						</div>
					</div>
					<div class="col-xs-4 example-grid">
						<div class="box">
							col-xs-4
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="row">
			<div class="col-xs-12">
				<h4>4 Columns</h4>
				<div class="row">
					<div class="col-xs-3 example-grid">
						<div class="box">
							col-xs-3
						</div>
					</div>
					<div class="col-xs-3 example-grid">
						<div class="box">
							col-xs-3
						</div>
					</div>
					<div class="col-xs-3 example-grid">
						<div class="box">
							col-xs-3
						</div>
					</div>
					<div class="col-xs-3 example-grid">
						<div class="box">
							col-xs-3
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="row">
			<div class="col-xs-12">
				<h4>6 Columns</h4>
				<div class="row">
					<div class="col-xs-2 example-grid">
						<div class="box">
							col-xs-2
						</div>
					</div>
					<div class="col-xs-2 example-grid">
						<div class="box">
							col-xs-2
						</div>
					</div>
					<div class="col-xs-2 example-grid">
						<div class="box">
							col-xs-2
						</div>
					</div>
					<div class="col-xs-2 example-grid">
						<div class="box">
							col-xs-2
						</div>
					</div>
					<div class="col-xs-2 example-grid">
						<div class="box">
							col-xs-2
						</div>
					</div>
					<div class="col-xs-2 example-grid">
						<div class="box">
							col-xs-2
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="row">
			<div class="col-xs-12">
				<h4>12 Columns</h4>
				<div class="row">
					<div class="col-xs-1 example-grid">
						<div class="box">
							col-xs-1
						</div>
					</div>
					<div class="col-xs-1 example-grid">
						<div class="box">
							col-xs-1
						</div>
					</div>
					<div class="col-xs-1 example-grid">
						<div class="box">
							col-xs-1
						</div>
					</div>
					<div class="col-xs-1 example-grid">
						<div class="box">
							col-xs-1
						</div>
					</div>
					<div class="col-xs-1 example-grid">
						<div class="box">
							col-xs-1
						</div>
					</div>
					<div class="col-xs-1 example-grid">
						<div class="box">
							col-xs-1
						</div>
					</div>
					<div class="col-xs-1 example-grid">
						<div class="box">
							col-xs-1
						</div>
					</div>
					<div class="col-xs-1 example-grid">
						<div class="box">
							col-xs-1
						</div>
					</div>
					<div class="col-xs-1 example-grid">
						<div class="box">
							col-xs-1
						</div>
					</div>
					<div class="col-xs-1 example-grid">
						<div class="box">
							col-xs-1
						</div>
					</div>
					<div class="col-xs-1 example-grid">
						<div class="box">
							col-xs-1
						</div>
					</div>
					<div class="col-xs-1 example-grid">
						<div class="box">
							col-xs-1
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "hello",
		data() {
			return {
				error: null,
			};
		},
	};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
	.example-grid {
		background-color: #b1e0ec;
		padding-top:20px;
		padding-bottom:20px;

		.box {
			background-color: #52bad5;
			text-align:center;
			padding:20px 0px;
		}
	}
</style>
