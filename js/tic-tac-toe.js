const tic_tac_toe = {
    board: ['', '', '', '', '', '', '', '', ''],
    simbols: {
        options: ['X', 'O'],
        turn_index: 0,
        change: function(){
            this.turn_index = (this.turn_index === 0 ? 1 : 0);
        }
    },
    container_element: null,
    gameover: false,
    winning_seq:[
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ], 
    
    init: function(container){
        this.container_element = container;
    },

    make_play: function(position) {
        if(this.gameover) return false;
        if(this.board[position] === ''){
            this.board[position] = this.simbols.options [ this.simbols.turn_index ];
            this.draw();
            let winning_seq_index = this.check_winning_seq (this.simbols.options [ this.simbols.turn_index ])
            if ( winning_seq_index >= 0) {
                this.game_is_over();
            }else {
                this.simbols.change();
            }
            return true;   
        } else {
            return false;
        }
    },

    start: function(){
        this.board.fill('');
        this.draw();
        this.gameover = false
    },

    game_is_over: function() {
        this.gameover = true;
        console.log('Game Over!')
    },

    check_winning_seq: function(simbol){
        for(i in this.winning_seq) {
            if(this.board [ this.winning_seq[i][0] ] == simbol &&
                this.board [ this.winning_seq[i][1] ] == simbol &&
                this.board [ this.winning_seq[i][2] ] == simbol
            ){
                console.log('Sequencia vencedora: ' + i)
                return i  
            }
        };
        return -1
    },

    draw: function() {
        let content = '';

        for( i in this.board) {
            content += '<div onclick = "tic_tac_toe.make_play('+ i +')">' + this.board[i] + '</div>';
        }
        this.container_element.innerHTML = content;
    }
}