function binarySearch(arr, element, start = 0, end = arr.length - 1) {
    while (start <= end) {
        let mid = Math.floor((start + end) / 2);

        if (arr[mid] === element) return mid;

        if (arr[mid] < element) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
    return -1;
}

console.log(binarySearch([0, 3, 5, 8, 10, 15], 15));

function buildTree(objs, current = objs[0], parent = null, result = {}) {
    if (!parent) {
        result['root'] = {};
        parent = result['root'];
    }

    if (current.children.length !== 0) {
        current.children.forEach(child =>{
            parent[child] = {};
            return buildTree(objs, objs[child], parent[child], result);
        });
    }
    return result;
}

let res = buildTree([
    {id: 'root', children: [1, 2]},
    {id: 1, children: [3, 4]},
    {id: 2, children: [5]},
    {id: 3, children: []},
    {id: 4, children: [6]},
    {id: 5, children: []},
    {id: 6, children: []}
]);
console.log(JSON.stringify(res, null, 2));
