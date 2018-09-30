//business logic
var rolling = function() {
  return Math.floor(Math.random() * 6) + 1;
}

function Player(roll, tempscore, totalscore, playername) {
  this.roll = 0;
  this.tempscore = 0;
  this.totalscore = 0;
  this.playername;
}
Player.prototype.onedie = function() {
  if (this.roll == 1) {
    this.tempscore = 0;
    alert("1 is not in your favour " + this.playername + ", your turn is over!");
  } else {
    this.tempscore += this.roll;
  }
}
Player.prototype.hold = function() {
  this.totalscore += this.tempscore;
  this.tempscore = 0;
  alert(this.playername + ", your held your score, your turn is over.");
}
Player.prototype.proGamer = function() {
  if (this.totalscore == 100) {
    alert(this.playername + ", you are Master Dicer!!");
  }
}
Player.prototype.newGame = function() {
  this.roll = 0;
  this.tempscore = 0;
  this.totalscore = 0;
  this.playername = ('');
}


//user-interface logic
$(document).ready(function() {
  $("form#players").submit(function(event) {
    event.preventDefault();
    p1 = new Player();
    p2 = new Player();
    var player1 = $("input#player1name").val();
    var player2 = $("input#player2name").val();
    $("#players").hide();
    $(".gaming").show();
    $("#p1").text(player1);
    $("#p2").text(player2);
    p1.playername = player1;
    p2.playername = player2;
  });
  $("#newgame").click(function() {
    p1.newGame();
    p2.newGame();
    $("#players").show();
    $(".gaming").hide();
    $("input#player1name").val("");
    $("input#player2name").val("");

  });
  $("#p1-roll").click(function() {
    p1.roll = rolling();
    if (p1.roll == 1) {
      $("#onedice").show();
      $("#twodice").hide();
      $("#threedice").hide();
      $("#fourdice").hide();
      $("#fivedice").hide();
      $("#sixdice").hide();
    } else if (p1.roll == 2) {
      $("#twodice").show();
      $("#threedice").hide();
      $("#fourdice").hide();
      $("#fivedice").hide();
      $("#sixdice").hide();
      $("#onedice").hide();
    } else if (p1.roll == 3) {
      $("#threedice").show();
      $("#fourdice").hide();
      $("#fivedice").hide();
      $("#sixdice").hide();
      $("#twodice").hide();
      $("#onedice").hide();
    } else if (p1.roll == 4) {
      $("#fourdice").show();
      $("#fivedice").hide();
      $("#sixdice").hide();
      $("#twodice").hide();
      $("#onedice").hide();
      $("#threedice").hide();
    } else if (p1.roll == 5) {
      $("#fivedice").show();
      $("#sixdice").hide();
      $("#twodice").hide();
      $("#onedice").hide();
      $("#threedice").hide();
      $("#fourdice").hide();
    } else {
      $("#sixdice").show();
      $("#fivedice").hide();
      $("#fourdice").hide();
      $("#twodice").hide();
      $("#onedice").hide();
      $("#threedice").hide();
    }
    $("#die-roll-1").text(p1.roll);
    p1.onedie();
    $("#round-total-1").text(p1.tempscore);
  });

  $("#p2-roll").click(function() {
    p2.roll = rolling();
    if (p2.roll == 1) {
      $("#onedice").show();
      $("#twodice").hide();
      $("#threedice").hide();
      $("#fourdice").hide();
      $("#fivedice").hide();
      $("#sixdice").hide();
    } else if (p2.roll == 2) {
      $("#twodice").show();
      $("#threedice").hide();
      $("#fourdice").hide();
      $("#fivedice").hide();
      $("#sixdice").hide();
      $("#onedice").hide();
    } else if (p2.roll == 3) {
      $("#threedice").show();
      $("#fourdice").hide();
      $("#fivedice").hide();
      $("#sixdice").hide();
      $("#twodice").hide();
      $("#onedice").hide();
    } else if (p2.roll == 4) {
      $("#fourdice").show();
      $("#fivedice").hide();
      $("#sixdice").hide();
      $("#twodice").hide();
      $("#onedice").hide();
      $("#threedice").hide();
    } else if (p2.roll == 5) {
      $("#fivedice").show();
      $("#sixdice").hide();
      $("#twodice").hide();
      $("#onedice").hide();
      $("#threedice").hide();
      $("#fourdice").hide();
    } else {
      $("#sixdice").show();
      $("#fivedice").hide();
      $("#fourdice").hide();
      $("#twodice").hide();
      $("#onedice").hide();
      $("#threedice").hide();
    }
    $("#die-roll-2").text(p2.roll);
    p2.onedie();
    $("#round-total-2").text(p2.tempscore);
  });

  $("#p1-hold").click(function() {
    p1.hold();
    $("#total-score-1").text(p1.totalscore);
    $("#round-total-1").empty();
    $("#die-roll-1").empty();
    p1.proGamer();
  });

  $("#p2-hold").click(function() {
    p2.hold();
    $("#total-score-2").text(p2.totalscore);
    $("#round-total-2").empty();
    $("#die-roll-2").empty();
    p2.proGamer();
  });

});
