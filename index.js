// Ambil data dari localStorage
let expenses =
JSON.parse(localStorage.getItem("expenses")) || [];

// Element DOM
const form = document.getElementById("expenseForm");
const expenseList = document.getElementById("expenseList");

// Render Data 
function renderExpenses() {

    expenseList.innerHTML = "";

    expenses.forEach((expense, index) => {

    const row = document.createElement("tr");

 row.innerHTML = `
   <td>${index + 1}</td>
   <td>${expense.nama}</td>
   <td>Rp ${expense.nominal}</td>
   `;

     expenseList.appendChild(row);

  });

}

// Event Submit
form.addEventListener("submit", function(event){

    event.preventDefault();

    const nama =
    document.getElementById("nama").value.trim();

    const nominal =
    document.getElementById("nominal").value.trim();

    // Validasi
    if(nama === "" || nominal === ""){

        alert("Semua input wajib diisi!");

  } else {

  const expense = {
  nama: nama,
  nominal: nominal

 };

 // Tambah ke array
   expenses.push(expense);

 // Simpan ke localStorage
  localStorage.setItem(
  "expenses",
  JSON.stringify(expenses)
  );

 // Render ulang
 renderExpenses();

 // Kosongkan form
 form.reset();

    }

});

// Tampilkan data saat halaman dibuka
renderExpenses();