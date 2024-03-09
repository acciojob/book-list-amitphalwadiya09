document.getElementById('bookForm').addEventListener('submit', function(event) {
            event.preventDefault();

            let title = document.getElementById('title').value;
            let author = document.getElementById('author').value;
            let isbn = document.getElementById('isbn').value;

            let tableBody = document.getElementById('book-list');
            let newRow = tableBody.insertRow(tableBody.rows.length);
            let cell1 = newRow.insertCell(0);
            let cell2 = newRow.insertCell(1);
            let cell3 = newRow.insertCell(2);
            let cell4 = newRow.insertCell(3);

            cell1.innerHTML = title;
            cell2.innerHTML = author;
            cell3.innerHTML = isbn;
            cell4.innerHTML = '<button class="delete" onclick="deleteRow(this)">Clear</button>';

            document.getElementById('title').value = '';
            document.getElementById('author').value = '';
            document.getElementById('isbn').value = '';
        });

        function deleteRow(button) {
            var row = button.parentNode.parentNode;
            row.parentNode.removeChild(row);
        }