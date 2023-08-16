const buf = Buffer.allocUnsafe(10);
const len = buf.write("hello world hahahah");
console.log(len, buf.toString()); // jika kosong maka encoding default adalah utf8
console.log(len, buf.toString("ascii")); // kita juga bisa membaca dengan encoding tertentu
console.log(len, buf.toString(undefined, 0, 5));
buf[0] = 100;
console.log(buf[0]);
console.log(buf.toJSON());