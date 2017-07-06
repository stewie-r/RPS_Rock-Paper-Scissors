$(document).ready(function() {


	$(".rock").click(function() {


		$(".paper").fadeOut().delay(1500).fadeIn();
		$(".scissors").fadeOut().delay(1500).fadeIn();

		$(this).animate({"left": "2.7em"}, 800).delay(850).animate({"left": "0.7em"}, 800);

				var computerPick = (Math.random() * (3 - 1) + 1).toFixed(0);

			if (computerPick == 1) {

				$(".paper2").fadeOut().delay(1500).fadeIn();
				$(".scissors2").fadeOut().delay(1500).fadeIn();

				$(".rock2").animate({"right": "2.7em"}, 800).delay(850).animate({"right": "0.7em"}, 800);

					var rockTie = $("#midButton").html("2 Rocks, no winner") &&
								$("#midButton").css({"left": "34.3em"});
						
						$(".left-side-hr").animate({"left": "44.5em"}, 200).delay(2200).animate({"left": "46em"}, 200);
						$(".right-side-hr").animate({"right": "44.5em"}, 200).delay(2200).animate({"right": "46em"}, 200);
						$(rockTie).fadeIn(300).delay(1900).fadeOut(300);

			}

			else if (computerPick == 2) {

				$(".rock2").fadeOut().delay(1500).fadeIn();
				$(".scissors2").fadeOut().delay(1500).fadeIn();

				$(".paper2").animate({"right": "2.7em"}, 800).delay(850).animate({"right": "0.7em"}, 800);

					var rockLost = $("#midButton").html("Go and pick up new rocks") &&
								 $("#midButton").css({"left": "32.6em"});
						
						$(".left-side-hr").animate({"left": "44.5em"}, 200).delay(2200).animate({"left": "46em"}, 200);
						$(".right-side-hr").animate({"right": "44.5em"}, 200).delay(2200).animate({"right": "46em"}, 200);
						$(rockLost).fadeIn(300).delay(1900).fadeOut(300);

			}

			else {

				$(".rock2").fadeOut().delay(1500).fadeIn();
				$(".paper2").fadeOut().delay(1500).fadeIn();

				$(".scissors2").animate({"right": "2.7em"}, 800).delay(850).animate({"right": "0.7em"}, 800);

					var rockWon = $("#midButton").html("Sick rock bro!") &&
								$("#midButton").css({"left": "35.2em"});
						
						$(".left-side-hr").animate({"left": "44.5em"}, 200).delay(2200).animate({"left": "46em"}, 200);
						$(".right-side-hr").animate({"right": "44.5em"}, 200).delay(2200).animate({"right": "46em"}, 200);
						$(rockWon).fadeIn(300).delay(1900).fadeOut(300);

			}

		});


$(".paper").click(function() {


	$(".paper").animate({"left": "2.7em"}, 800).delay(850).animate({"left": "0.7em"}, 800);

	$(".rock").fadeOut().delay(1500).fadeIn();
	$(".scissors").fadeOut().delay(1500).fadeIn();

			var computerPick = (Math.random() * (3 - 1) + 1).toFixed(0);
					
		if (computerPick == 1) {

			$(".paper2").fadeOut().delay(1500).fadeIn();
			$(".scissors2").fadeOut().delay(1500).fadeIn();

			$(".rock2").animate({"right": "2.7em"}, 800).delay(850).animate({"right": "0.7em"}, 800);

				var paperWon = $("#midButton").html("Rock dressed as paper") &&
							 $("#midButton").css({"left": "33.7em"});
						
					$(".left-side-hr").animate({"left": "44.5em"}, 200).delay(2200).animate({"left": "46em"}, 200);
					$(".right-side-hr").animate({"right": "44.5em"}, 200).delay(2200).animate({"right": "46em"}, 200);
					$(paperWon).fadeIn(300).delay(1900).fadeOut(300);

		}

		else if (computerPick == 2) {

			$(".rock2").fadeOut().delay(1500).fadeIn();
			$(".scissors2").fadeOut().delay(1500).fadeIn();

			$(".paper2").animate({"right": "2.7em"}, 800).delay(850).animate({"right": "0.7em"}, 800);

				var paperTie = $("#midButton").html("Paper & Paper..? Nah") &&
							$("#midButton").css({"left": "33.8em"});
						
					$(".left-side-hr").animate({"left": "44.5em"}, 200).delay(2200).animate({"left": "46em"}, 200);
					$(".right-side-hr").animate({"right": "44.5em"}, 200).delay(2200).animate({"right": "46em"}, 200);
					$(paperTie).fadeIn(300).delay(1900).fadeOut(300);

		}

		else {

			$(".rock2").fadeOut().delay(1500).fadeIn();
			$(".paper2").fadeOut().delay(1500).fadeIn();

			$(".scissors2").animate({"right": "2.7em"}, 800).delay(850).animate({"right": "0.7em"}, 800);

				var paperLost = $("#midButton").html("Paper got pierced by scissors") &&
								$("#midButton").css({"left": "31.9em"});

					$(".left-side-hr").animate({"left": "44.5em"}, 200).delay(2200).animate({"left": "46em"}, 200);
					$(".right-side-hr").animate({"right": "44.5em"}, 200).delay(2200).animate({"right": "46em"}, 200);
					$(paperLost).fadeIn(300).delay(1900).fadeOut(300);

		}

});


$(".scissors").click(function() {


	$(".rock").fadeOut().delay(1500).fadeIn();
	$(".paper").fadeOut().delay(1500).fadeIn();


	$(this).animate({"left": "2.7em"}, 800).delay(850).animate({"left": "0.7em"}, 800);

			var computerPick = (Math.random() * (3 - 1) + 1).toFixed(0);
					
		if (computerPick == 1) {

			$(".paper2").fadeOut().delay(1500).fadeIn();
			$(".scissors2").fadeOut().delay(1500).fadeIn();

			$(".rock2").animate({"right": "2.7em"}, 800).delay(850).animate({"right": "0.7em"}, 800);

				var scissorsLost = $("#midButton").html("Buy yourself some new scissors") &&
								$("#midButton").css({"left": "31.5em"});
						
					$(".left-side-hr").animate({"left": "44.5em"}, 200).delay(2200).animate({"left": "46em"}, 200);
					$(".right-side-hr").animate({"right": "44.5em"}, 200).delay(2200).animate({"right": "46em"}, 200);
					$(scissorsLost).fadeIn(300).delay(1900).fadeOut(300);

		}

		else if (computerPick == 2) {

			$(".rock2").fadeOut().delay(1500).fadeIn();
			$(".scissors2").fadeOut().delay(1500).fadeIn();

			$(".paper2").animate({"right": "2.7em"}, 800).delay(850).animate({"right": "0.7em"}, 800);

				var scissorsWon = $("#midButton").html("Dat paper got cut in pieces") &&
								$("#midButton").css({"left": "32.6em"});
						
					$(".left-side-hr").animate({"left": "44.5em"}, 200).delay(2200).animate({"left": "46em"}, 200);
					$(".right-side-hr").animate({"right": "44.5em"}, 200).delay(2200).animate({"right": "46em"}, 200);
					$(scissorsWon).fadeIn(300).delay(1900).fadeOut(300);

		}

		else {

			$(".rock2").fadeOut().delay(1500).fadeIn();
			$(".paper2").fadeOut().delay(1500).fadeIn();

			$(".scissors2").animate({"right": "2.7em"}, 800).delay(850).animate({"right": "0.7em"}, 800);

				var scissorsTie = $("#midButton").html("RPS gone sexual") &&
								$("#midButton").css({"left": "34.8em"});
						
					$(".left-side-hr").animate({"left": "44.5em"}, 200).delay(2200).animate({"left": "46em"}, 200);
					$(".right-side-hr").animate({"right": "44.5em"}, 200).delay(2200).animate({"right": "46em"}, 200);
					$(scissorsTie).fadeIn(300).delay(1900).fadeOut(300);

		}

});

});