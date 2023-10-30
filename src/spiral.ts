export function spiral(arr:Array<Array<number>>) {
    const h = arr.length;
    let w = 0;
    
    arr.forEach(arr2 => {
        if(arr2.length > w) {
            w = arr2.length;
        }
    })

    const result = [];
    let startCol =0;
    let endCol = w-1;
    let startRow = 0;
    let endRow = h-1;

    while(startCol<=endCol && startRow <= endRow) {
        for (let i = startCol; i <= endCol; i++) {
            result.push(arr[startRow][i]);
        }

        startRow ++;

        for(let j = startRow; j <= endRow; j++) {
            result.push(arr[j][endCol]);
        }

        endCol --;

        for(let i= endCol; i>=startCol;i--) {
            result.push(arr[endRow][i]);
        }

        endRow --;

        for (let i=endRow; i>=startRow; i--) {
            result.push(arr[i][startCol]);
        }

        startCol ++;
    }
    console.log(result);
    return result;
}