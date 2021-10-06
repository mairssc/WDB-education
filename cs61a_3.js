function num_sevens(n){
    /* Returns the number of times 7 appears as a digit of n.

    >>> num_sevens(3)
    0
    >>> num_sevens(7)
    1
    >>> num_sevens(7777777)
    7
    >>> num_sevens(2637)
    1
    >>> num_sevens(76370)
    2
    >>> num_sevens(12345)
    0
    >>> from construct_check import check
    >>> # ban all assignment statements
    >>> check(HW_SOURCE_FILE, 'num_sevens',
    ...       ['Assign', 'AugAssign'])
    True
    */
    // *** YOUR CODE HERE ***
    if (n <= 1) {
        return 0;
    } else if (n % 10 === 7) {
        return num_sevens(Math.floor(n/10)) + 1;
    } else {
        return num_sevens(Math.floor(n/10));
    }
}

function pingpong(n){
    /*
		Return the nth element of the ping-pong sequence.

    >>> pingpong(7)
    7
    >>> pingpong(8)
    6
    >>> pingpong(15)
    1
    >>> pingpong(21)
    -1
    >>> pingpong(22)
    0
    >>> pingpong(30)
    6
    >>> pingpong(68)
    2
    >>> pingpong(69)
    1
    >>> pingpong(70)
    0
    >>> pingpong(71)
    1
    >>> pingpong(72)
    0
    >>> pingpong(100)
    2
    >>> from construct_check import check
    >>> # ban assignment statements
    >>> check(HW_SOURCE_FILE, 'pingpong', ['Assign', 'AugAssign'])
    True
    */
    // *** YOUR CODE HERE ***
    function valueMove(index, value, isUp) {
        if (index === n) {
            return value;
        }
        if (isUp) {
            if (index % 7 === 0 || num_sevens(index) >= 1) {
                return valueMove(index + 1, value - 1, !isUp);
            }
            return valueMove(index + 1, value + 1, isUp);
        } else {
            if (index % 7 === 0 || num_sevens(index) >= 1) {
                return valueMove(index + 1, value + 1, !isUp);
            }
            return valueMove(index + 1, value - 1, isUp);
        }
    }
    return valueMove(1, 1, true);
}

function get_next_coin(coin){
    return coin * 2;
}

function count_coins(change){
    /* Return the number of ways to make change for amount.

    >>> count_change(7)
    6
    >>> count_change(10)
    14
    >>> count_change(20)
    60
    >>> count_change(100)
    9828
    >>> from construct_check import check
    >>> # ban iteration
    >>> check(HW_SOURCE_FILE, 'count_change', ['While', 'For'])
    True
    */
    // *** YOUR CODE HERE ***
    function all_coins(coin, change_hold) {
        if (change_hold === 0) {
            return 1;
        } else if (change_hold < 0) {
            return 0;
        } else if (coin > change_hold) {
            return 0;
        }
        return all_coins(get_next_coin(coin), change_hold) + all_coins(coin, change_hold - coin);
    }
    return all_coins(1, change);
}