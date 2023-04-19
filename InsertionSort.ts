export class InsertionSort {
    static insertionSort(list: number[]) {
        for (let i = 1; i < list.length; i++) {
            let j = i;
            while (j > 0 && list[j] < list[j - 1]) {
                [list[j], list[j - 1]] = [list[j - 1], list[j]];
                j--;
            }
        }
    }
}