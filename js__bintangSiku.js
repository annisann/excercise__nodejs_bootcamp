function bintang (row) {
    if (row == 0){
        return
    }

    bintang(row-1)
    console.log("*".repeat(row))
}

bintang(3)

/*
    Output:
    *
    **
    ***
*/
