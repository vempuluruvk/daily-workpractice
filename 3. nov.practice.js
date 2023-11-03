

	
	let n = 5;
	for (let i = 1; i <= 10; ++i)
		console.log(n + " * " + i +
			" = " + n * i);

            var rows = prompt("How many rows for your multiplication table?");
            var cols = prompt("How many columns for your multiplication table?");
            if(rows == "" || rows == null)
                    rows = 10;
            if(cols== "" || cols== null)
                    cols = 10;
            createTable(rows, cols);
            function createTable(rows, cols)
            {
              var j=1;
              var output = "<table border='1' width='500' cellspacing='0'cellpadding='5'>";
              for(i=1;i<=rows;i++)
              {
                output = output + "<tr>";
                while(j<=cols)
                {
                    output = output + "<td>" + i*j + "</td>";
                     j = j+1;
                   }
                    output = output + "</tr>";
                    j = 1;
            }
            output = output + "</table>";
            console.log(output);
            }

            function trigger() {
                document.getElementById("hover").addEventListener("mouseover", popup);
                function popup() {
                    alert("Welcome to my WebPage!!!");
                }
            }

            let getLength = function (str) {
                let finalLength = 0;
              
                for (let i = 0; i < str.length; i++) {
                  let currentString = new Set();
              
                  for (let j = i; j < str.length; j++) {
                    if (currentString.has(str[j])) {
                      break;
                    } else {
                      currentString.add(str[j]);
                    }
                  }
              
                  finalLength = Math.max(finalLength, currentString.size);
                }
              
                return finalLength;
              };
              
              const str = "abbbcabcdefef";
              
              console.log(getLength(str));