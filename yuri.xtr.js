function getval(sel) {
        subscription = sel;
        $.ajax({
            url: url,
            type: 'GET',
            headers: {
                Authorization: 'Basic eXVyaS5saWFkaUB4dHJlbWF4LmNvbTpHY1dsUk84MVVjWVJqV1ljcnlIaURENTQ='
            },
            dataType: 'json'
        }).then(function (resultObject) {
            var response = resultObject.issues;
            var innerTable = "";
            for (var i = 0; i < response.length; i++) {
                if (response[i].fields.customfield_10053.name == subscription) {
                    var x = response[i].key;
                    var y = response[i].fields.summary;
                    var z = response[i].fields.status.name;
                    innerTable = innerTable + "<tr>";
                    innerTable = innerTable + "<td>" + x + "</td>";
                    innerTable = innerTable + "<td>" + y + "</td>";
                    innerTable = innerTable + "<td>" + z + "</td>";
                    innerTable = innerTable + "</tr>";
                }
            }
            var tableHeader = "<tr><th>Key</th><th>Summary</th><th>Status</th></tr>";
            var table = "<table class=\"table\">" + tableHeader + innerTable + "</table>";
            $('#jiraDashboard').html(table);
        });
    }
