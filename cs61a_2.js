function make_repeater(func, n){
    /*
		Return the function that computes the nth application of func.

    >>> add_three = make_repeater(increment, 3)
    >>> add_three(5)
    8
    >>> make_repeater(triple, 5)(1) # 3 * 3 * 3 * 3 * 3 * 1
    243
    >>> make_repeater(square, 2)(5) # square(square(5))
    625
    >>> make_repeater(square, 4)(5) # square(square(square(square(5))))
    152587890625
    >>> make_repeater(square, 0)(5) # Yes, it makes sense to apply the function zero times!
    5
    */
    // *** YOUR CODE HERE ***
    function repeater(x) {
        let reps = n;
        for (var i = 0; i < reps; i++) {
            x = func(x);
        }
        return x;
    } 
    return repeater;
}


function num_eights(pos){
    /* Returns the number of times 8 appears as a digit of pos.

    >>> num_eights(3)
    0
    >>> num_eights(8)
    1
    >>> num_eights(88888888)
    8
    >>> num_eights(2638)
    1
    >>> num_eights(86380)
    2
    >>> num_eights(12345)
    0
    >>> from construct_check import check
    >>> # ban all assignment statements
    >>> check(HW_SOURCE_FILE, 'num_eights',
    ...       ['Assign', 'AugAssign'])
    True
    */
    // *** YOUR CODE HERE ***
    if (pos <= 1) {
        return 0;
    } else if (pos % 10 === 8) {
        return num_eights(Math.floor(pos/10)) + 1;
    } else {
        return num_eights(Math.floor(pos/10));
    }
}


function pingpong(n){
    /*
		Return the nth element of the ping-pong sequence.

    >>> pingpong(8)
    8
    >>> pingpong(10)
    6
    >>> pingpong(15)
    1
    >>> pingpong(21)
    -1
    >>> pingpong(22)
    -2
    >>> pingpong(30)
    -2
    >>> pingpong(68)
    0
    >>> pingpong(69)
    -1
    >>> pingpong(80)
    0
    >>> pingpong(81)
    1
    >>> pingpong(82)
    0
    >>> pingpong(100)
    -6
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
            if (index % 8 === 0 || num_eights(index) >= 1) {
                return valueMove(index + 1, value - 1, !isUp);
            }
            return valueMove(index + 1, value + 1, isUp);
        } else {
            if (index % 8 === 0 || num_eights(index) >= 1) {
                return valueMove(index + 1, value + 1, !isUp);
            }
            return valueMove(index + 1, value - 1, isUp);
        }
    }
    return valueMove(1, 1, true);
}



function missing_digits(n){
    /* Given a number a that is in sorted, increasing order,
    return the number of missing digits in n. A missing digit is
    a number between the first and last digit of a that is not in n.
    >>> missing_digits(1248) # 3, 5, 6, 7
    4
    >>> missing_digits(19) # 2, 3, 4, 5, 6, 7, 8
    7
    >>> missing_digits(1122) # No missing numbers
    0
    >>> missing_digits(123456) # No missing numbers
    0
    >>> missing_digits(3558) # 4, 6, 7
    3
    >>> missing_digits(35578) # 4, 6
    2
    >>> missing_digits(12456) # 3
    1
    >>> missing_digits(16789) # 2, 3, 4, 5
    4

    >>> missing_digits(4) # No missing numbers between 4 and 4
    0
    >>> from construct_check import check
    >>> # ban while or for loops
    >>> check(HW_SOURCE_FILE, 'missing_digits', ['While', 'For'])
    True
    */
    // *** YOUR CODE HERE ***
    function num_between(hold_n, last) {
        if (hold_n === 0) {
            return 0;
        }
        if (last - hold_n %10 > 1) {
            return num_between(Math.floor(hold_n/10), hold_n%10) + last - (hold_n % 10) - 1;
        }
        return num_between(Math.floor(hold_n/10), hold_n%10);
    }
    return num_between(n, n%10);
}


function get_next_coin(coin){
    /* Return the next coin. 
    >>> get_next_coin(1)
    5
    >>> get_next_coin(5)
    10
    >>> get_next_coin(10)
    25
    >>> get_next_coin(2) # Other values return None
    */
    // *** YOUR CODE HERE ***
    if (coin === 1) {
        return 5;
    } else if (coin === 5) {
        return 10
    } else if (coin === 10) {
        return 25
    } 
    return null;
}

function count_coins(change){
    /* Return the number of ways to make change using coins of value of 1, 5, 10, 25.
    >>> count_coins(15)
    6
    >>> count_coins(10)
    4
    >>> count_coins(20)
    9
    >>> count_coins(100) # How many ways to make change for a dollar?
    242
    >>> from construct_check import check
    >>> # ban iteration
    >>> check(HW_SOURCE_FILE, 'count_coins', ['While', 'For'])                                          
    True
    */
    // *** YOUR CODE HERE ***
    function all_coins(coin, change_hold) {
        if (change_hold === 0) {
            return 1;
        } else if (change_hold < 0) {
            return 0;
        } else if (coin === null) {
            return 0;
        }
        return all_coins(get_next_coin(coin), change_hold) + all_coins(coin, change_hold - coin);
    }
    return all_coins(1, change);
}