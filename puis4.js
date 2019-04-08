function puissance4() { // exo3
    
    const createGrid = function(lines, columns) {

        let cases;       
        
        // added by me
        let winningNb = 4;  // default value
        if (winningNb > lines) winningNb = lines;       //  winningNb will be smaller than or equal to:
        if (winningNb > columns) winningNb = columns;   //              min(lines, columns)
        function setWinningNb(nb) {
            winningNb = nb;
        };
        // exo3A.a
        function initCases() { 
            cases = [];
            for (let i = 0; i < lines; i++) {
                cases[i] = [];
                for (let j = 0; j < columns; j++) {
                    cases[i].push(' ');
                }
            }
        };
        // exo3A.b
        function showGrid() { 
            let gridString = "";
            for (let i = lines-1; i >= 0; i--) { // horizontal invertment for a life like display
                gridString += "|";
                for (let j = 0; j < columns; j++) {
                    gridString += cases[i][j] + "|";
                }
                gridString += "\n";
            }
            gridString += "|";
            for (let j = 0; j < columns; j++) {
                gridString += j+ "|";
            }
            console.log(gridString);
        };
        // exo3A.c
        function addPawn(column, pawn) {
            let full = false;
            let i = 0;
            while (i < lines-1 && cases[i][column] != " ") {
                i++;
            }
            if (cases[i][column] != 'X' && cases[i][column] != 'O') { // to avoid overwriting on the top                
                animPawn(lines-1, i, column, pawn);                
            }
            else {
                full = true;    
            }
            return full;
        };
        // exo3A.d
        function checkColumns(){ 
            let j = 0;
            let winner = false;
            let actualPawn;
            while (!winner && j < columns) {
                let maxNb = 0;
                actualPawn = cases[0][j];
                let i = 0;
                while (!winner && i < lines) {
                    if (actualPawn != " ") { // if it is " " then the column is empty or we are above the highest pawn of the column
                        if (cases[i][j] == actualPawn) {        // X following X or O following O
                            maxNb++;
                        }
                        else {                                  // O following X or X following O
                            maxNb = 1;
                            actualPawn = cases[i][j];
                        }
                    }
                    if (maxNb == winningNb) {
                        winner = true;
                    }
                    i++;
                }
                j++;
            }
            winnerPawn = " ";   
            if (winner) winnerPawn = actualPawn;
            return winnerPawn;
        };
        // exo3A.e
        function checkLines(){ 
            let i = 0;
            let winner = false;
            let actualPawn;
            while (!winner && i < lines) {
                let maxNb = 0;
                actualPawn = cases[i][0];
                let j = 0;
                while (!winner && j < columns) {
                    if (actualPawn == " " && cases[i][j] != " ") {
                        maxNb = 1;
                        actualPawn = cases[i][j];
                    }
                    else {
                        if (cases[i][j] == actualPawn) {  // X following X or O following O
                            maxNb++;
                        }
                        else {                              // O following X or X following O
                            maxNb = 1;
                            actualPawn = cases[i][j];
                        }
                    }
                    if (maxNb == winningNb) {
                        winner = true;
                    }
                    j++;
                }
                i++;
            }
            winnerPawn = " ";
            if (winner) winnerPawn = actualPawn;
            return winnerPawn;
        };
        // exo3A.f
        function checkDiagonals() { 
            let i, j;
            let winner = false;
            let actualPawn = " ";
            let maxNb = 1;
            i = 0;
            j = 0;                          //          \
            while (!winner && i < lines) {  //           V
                if (i+(winningNb-1) < lines && j+(winningNb-1)< columns) {
                    let _i = i, _j = j;
                    let maxNb = 0;
                    actualPawn = cases[_i][_j];
                    while (!winner && _i < lines && _j < columns) {                        
                        if (actualPawn == " " && cases[_i][_j] != " ") {
                            maxNb = 1;
                            actualPawn = cases[_i][_j];
                        }
                        else if (actualPawn == " " && cases[_i][_j] == " ") {
                            maxNb = 0;
                        }
                        else {
                            if (cases[_i][_j] == actualPawn) {  // X following X or O following O
                                maxNb++;
                            }
                            else {                              // O following X or X following O
                                maxNb = 1;
                                actualPawn = cases[_i][_j];
                            }
                        }
                        if (maxNb == winningNb) {
                            winner = true;
                            console.log(maxNb);
                        }
                        _i++;
                        _j++;
                    }
                }
                i++;
            }
            i = 0;
            j = 1;                            //        \
            while (!winner && j < columns) {  //         V
                if (i+(winningNb-1) < lines && j+(winningNb-1) < columns) {
                    let _i = i, _j = j;
                    let maxNb = 0;
                    actualPawn = cases[_i][_j];
                    while (!winner && _i < lines && _j < columns) {                        
                        if (actualPawn == " " && cases[_i][_j] != " ") {
                            maxNb = 1;
                            actualPawn = cases[_i][_j];
                        }
                        else if (actualPawn == " " && cases[_i][_j] == " ") {
                            maxNb = 0;
                        }
                        else {
                            if (cases[_i][_j] == actualPawn) {  // X following X or O following O
                                maxNb++;
                            }
                            else {                              // O following X or X following O
                                maxNb = 1;
                                actualPawn = cases[_i][_j];
                            }
                        }
                        if (maxNb == winningNb) {
                            winner = true;
                            console.log(2);
                        }
                        _i++;
                        _j++;
                    }
                }
                j++
            }
            i = 0;
            j = columns-1;                 //           / 
            while (!winner && i < lines) { //          V
                if (i+(winningNb-1) < lines && j-(winningNb-1) >= 0) {
                    let _i = i, _j = j;
                    let maxNb = 0;
                    actualPawn = cases[_i][_j];
                    while (!winner && _i < lines && _j >= 0) {                        
                        if (actualPawn == " " && cases[_i][_j] != " ") {
                            maxNb = 1;
                            actualPawn = cases[_i][_j];
                        }
                        else if (actualPawn == " " && cases[_i][_j] == " ") {
                            maxNb = 0;
                        }
                        else {
                            if (cases[_i][_j] == actualPawn) {  // X following X or O following O
                                maxNb++;
                            }
                            else {                              // O following X or X following O
                                maxNb = 1;
                                actualPawn = cases[_i][_j];
                            }
                        }
                        if (maxNb == winningNb) {
                            winner = true;
                            console.log(3);
                        }
                        _i++;
                        _j--;
                    }
                }
                i++;
            }
            i = 0;
            j = 0;                             //       / 
            while (!winner && j < columns-1) { //      V
                if (i+(winningNb-1) < lines && j-(winningNb-1) >= 0) {                    
                    let _i = i, _j = j;
                    let maxNb = 0;
                    actualPawn = cases[_i][_j];
                    while (!winner && _i < lines && _j >= 0) {
                        if (actualPawn == " " && cases[_i][_j] != " ") {
                            maxNb = 1;
                            actualPawn = cases[_i][_j];
                        }
                        else if (actualPawn == " " && cases[_i][_j] == " ") {
                            maxNb = 0;
                        }
                        else {
                            if (cases[_i][_j] == actualPawn) {  // X following X or O following O
                                maxNb++;
                            }
                            else {                              // O following X or X following O
                                maxNb = 1;
                                actualPawn = cases[_i][_j];
                            }
                        }
                        if (maxNb == winningNb) {
                            winner = true;
                            console.log(4);
                        }
                        _i++;
                        _j--;
                    }
                }
                j++;
            }
            let winnerPawn = " ";
            if (winner) winnerPawn = actualPawn;
            return winnerPawn;
        };
        // exo3A.g
        function checkForWinner() {
            let winnerPawn = " ";
            if ((winnerPawn = checkLines()) != " ") ;          // Without added parenthesis, winnerPawn becomes a boolean!
            else if ((winnerPawn = checkColumns()) != " ") ;   // Without added parenthesis, winnerPawn becomes a boolean!
            else if ((winnerPawn = checkDiagonals()) != " ") ; // Without added parenthesis, winnerPawn becomes a boolean!
            else ;
            return winnerPawn;
        }
        // exo3A.h
        function isFull() {            
            // old code, used to check all the content of the grid
            /*let full = true
            let i = 0, j = 0;
            while (full && i < lines) {
                j = 0;
                while (full && j < columns) {
                    if (cases[i][j] == " ") full = false;
                    j++;
                }
                i++;
            }
            return full;*/
            //
            // if the top line is full, all the lines under it are also full
            // therefore, we only need to check the top line
            let full = true;
            let i = lines-1;
            let j = 0;
            while (full && j < columns) {
                if (cases[i][j] == " ") full = false;
                j++;
            }
            return full;            
        };      
        const self = {
            getLines() {return lines;},
            getColumns() {return columns;},
            getCases() {return cases;},
            setWinningNb, // fonction hors enonce
            showGrid,
            addPawn,
            checkForWinner,
            isFull,        
        };
        initCases();
        return self;
    };

    let grid = createGrid(6, 7);
    let actualPlayer = 'O';
    let canPlay = true;
    let end = false;
    let scoreX = 0, scoreO = 0;
    function play(col) {
        // ON DEMANDE DE FAIRE LE PLAY EN DEHORS DE LA "CLASSE" GRID
        if (! end && canPlay && !isNaN(col) && col >= 0 && col < grid.getColumns()) {
            if (!grid.addPawn(col, actualPlayer)) { // true if the column is not full
            }
            else {
                ; //console.log("Cette colonne est d�j� remplie !");
            }
        }
        else ; //console.log("Cette colonne n'existe pas.");        
    };
    function restart() {
        if (canPlay) {
            grid = createGrid(6, 7);
            // on met et on affiche O comme étant le premier joueur
            actualPlayer = 'O';
            $("#actualPawnViewContent").css('backgroundColor', game.getActualPawn()=='x'?"red":"yellow");
            end = false;
            for (let i = 0; i < grid.getLines()*grid.getColumns(); i++) {
                $('#nb'+i).css('backgroundColor', "white");
            }
        }
    };
    function animPawn(etape, min, col, pawn) {
        if (etape < min) {
            canPlay = true;
            // on déplace enfin le pion car l'animation est finie
            grid.getCases()[min][col] = pawn;
            // on vérifie s'il y a un gagnant à la fin de l'animation !
            let gameWinner = grid.checkForWinner();
            if (gameWinner == 'O' || gameWinner == 'X') {
                //console.log("Le joueur : " + (gameWinner=='O'?"Jaune":"Rouge") +" a remporté la partie !");
                alert("Le joueur "+ (gameWinner=='O'?"Jaune":"Rouge") +" a remporté la partie !");
                // update des scores
                if (gameWinner == 'X'){
                    scoreX++;
                    //document.getElementById("redScoreContent").textContent = scoreX;
                } 
                else {
                    scoreO++;
                    //document.getElementById("yellowScoreContent").textContent = scoreO;
                }
                //self.restart();
                end = true;
            }
            else {
                if (grid.isFull()) {
                    //console.log("La partie se termine sur une égalité !");
                    alert("La partie se termine sur une égalité !");
                    //self.restart();
                    end = true;
                }
                else {                        
                    if (actualPlayer == 'X') {
                        actualPlayer = 'O';
                        $("#actualPawnViewContent").css('backgroundColor', "yellow");
                    }
                    else if (actualPlayer == 'O') {
                        actualPlayer = 'X';
                        $("#actualPawnViewContent").css('backgroundColor', "red");
                    }
                }
            }            
            // on sort de l'animation
            return ;
        }
        canPlay = false;
        // gérer le traitement de l’étape n° etape
        // NE PAS FAIRE LA SUITE, ON NE VEUT PAS MODIFIER LA PION DANS LA GRILLE MAIS L'AFFICHAGE DE CETTE GRILLE !
        //if (etape < grid.getLines()-1) grid.getCases()[etape+1][col] = " "; // on vide la case du dessus si elle ne dépasse pas
        //grid.getCases()[etape][col] = pawn;                                 // puis on remplit celle du dessous
        // DONC ON VA PLUTOT FAIRE CECI :        
        //if (etape < grid.getLines()-1) document.getElementById("nb"+(etape*grid.getColumns()+col)).style.backgroundColor = "white";
        if (etape < grid.getLines()-1) $('#nb'+((etape+1)*grid.getColumns()+col)).css('backgroundColor', 'white');
        $('#nb'+(etape*grid.getColumns()+col)).css('backgroundColor', actualPlayer=='X'?"red":"yellow");
        // continuation de l'animation
        setTimeout(
            function() {
                animPawn(etape-1, min, col, pawn);
            },
        40) ;
    };
    const self = {
        createGrid,
        play,
        restart,
        animPawn,
        getActualPawn() {return actualPlayer;},
        getScoreX() {return scoreX;},
        getScoreO() {return scoreO;}
    };

    return self;
}

const game = puissance4();

let toShow = "";
let i, j;
let lines = 6, columns = 7;

//toshow += "<tr> 1 </tr> <tr> 2 </tr>";
toShow += '<table id = "myTable">';
for (i = 0; i < lines + 1 /* +1 pour les boutons de jeu */; i++) {
    toShow += "<tr>";
    for (j = 0; j < columns; j++) {        
        if (i < lines) {
            toShow += '<td class="cell"> <div id=nb'+((lines-1-i)*columns+j)+' onclick="game.play('+j+')"> <div class="caseContent">' + '</div> </td>';
        }
        else {
            if (j == 3) toShow += '<td class="play"> <div class="divButton" onclick="game.restart()"></div> </td>';
            if (j == 0) toShow += '<td class="play"> <div id="actualPawnView"><div id = "actualPawnViewContent"></div></div> </td>';
            //if (j == 4) toShow += '<td class="play"> <div id="actualPawnView"><div></div> </div> </td>';
            //if (j == 5) toShow += '<td class="play"> <div id="actualPawnView"><div></div> </div> </td>';
            else toShow += '<td class="play"> <div class="notDivButton"></div> </td>';
        }
    }
    toShow += "</tr>";
}
toShow += "</table>";

$("#content").html(toShow);

// on affiche le jeu en fonction de la hauteur de la fenêtre, au départ ET à chaque fois qu'on modifie la taille de la fenêtre
$("#myTable").css('width', $('window').prop('innerHeight')+"px");
$("#myTable").css('height', $('window').prop('innerHeight')+"px");
$('window').on('resize', function() {
    $("#myTable").css('width', $('window').prop('innerHeight')+"px");
    $("#myTable").css('height', $('window').prop('innerHeight')+"px");
});

// on affiche le joueur premier
$('#actualPawnViewContent').css('backgroundColor', game.getActualPawn()=='x'?"red":"yellow");

// apres le content car les nbi (cellules) sont générés dans le content
for (i = 0; i < lines*columns; i++){
    // normal
    $("#nb"+i).css('width', "100%");
    $("#nb"+i).css('height', "100%");
    $("#nb"+i).css('borderRadius', "50%");
    $("#nb"+i).css('backgroundColor', "white");
    // hover
    $("#nb"+i).mouseenter(function() {$("#nb"+i).css('border', "3px solid rgb(133, 133, 133)")});
    $("#nb"+i).mouseleave(function() {$("#nb"+i).css('border', "none")});
}

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// !!                                                                                                                                               !!
// !!  POUR CHANGER LE STYLE (OU ACCEDER A UN ELEMENT) AVEC LE DOM ET PAS LES ID :                                                                  !!
// !!  document.children[0].children[1].children[0].children[0].children[1].children[6].children[0].style.backgroundColor                           !!
// !!  CAR document.children[0].children[1].children[0].children[0].children[1].children[6].children[0] EST LE DIV DE LA CELLULE LIGNE 1 COLONNE 6  !!
// !!                                                                                                                                               !!
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


/*
ATTENTION AUX LIGNES SUIVANTES :

$("#myTable").css('width', $('window').prop('innerHeight')+"px");
$("#myTable").css('height', $('window').prop('innerHeight')+"px");
$("#content").html(toShow);
alert('message'); // sufit
*/