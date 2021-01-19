for (var i = 0; i < 5 ; i++){
    setTimeout(function () {
        console.log(i);
    }, 1000);
}

// mong muốn là vòng lặp sẽ chạy từ 0 đến 4 và in cho anh các số là 0,1,2,3,4 mỗi giây.
// Nhưng thực tế khi chạy đoạn mã trên sẽ nhận được in ra số 5 trong 5 lần chạy. Vì sao lại như vậy.
// Sau khi chạy 5 vòng lặp thì giá trị của i lúc này là bằng 5. Sau đó nó truyền số 5 này vào callback là setTimeout trong 1 giây.
// Chính vì nó dùng chung 1 biến i nên giá trị của 5 lần đó đều giống nhau cả.