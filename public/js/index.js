let multiplicateur = 5
for (let i = 1; i < 10; i++) {
    console.log(`${multiplicateur} x ${i} = ${multiplicateur * i}`);;
    
}
    

for (let i = 20; i >= 0; i -= 2) {
    console.log(i);
}
let tab3 = ["sebastian", "brandon", "mohamed", "denis", "charlotte", "yassine", "quentin", "idrisse","victor", "vitor", "laurent", "enide", "fadia", "adil", "shahin"]
let longprenoms = []
for ( let i = 0; i<tab3.length; i++){
    if (tab3[i].length > 5) {
    longprenoms.push(tab3[i])
        
    }
    }

console.log(longprenoms);

let sommes = [14, 7 , 97, 65 , 247 , 67 , 101 , 4 , 34 ,78 , 1 ,900 , 0, 11 , 32 , 23 , 61];
let grossesommes = []
for ( let i = 0; i<sommes.length; i++){
    if (sommes[i] > 60) {
        grossesommes.push(sommes[i])
        sommes.splice(i,1)
        i--;
    }
}
console.log(sommes);
console.log(grossesommes);

let donnees = [14, 7 , 97, {} , "247" , 67 , 101 , true , 34 ,78 , [] ,'coding school' , 0, 11 , 32 , "italie" , 61,null,'cent',100];

let typeString = []
let typeNumber = []
let typeObject = []
let typeAutre = []

for (i = 0; i<donnees.length; i++){
    if (typeof donnees[i] === 'string') {
        typeString.push(donnees[i]);
        } else if (typeof donnees[i] === 'number') {
        typeNumber.push(donnees[i]);
        } else if (typeof donnees[i] === 'object') {
        typeObject.push(donnees[i]);
        } else {
        typeAutre.push(donnees[i]);
        }
    }
    console.log(typeString);
    console.log(typeNumber);
    console.log(typeObject);
    console.log(typeAutre);

function modifyString(element) {
    var modifiedString = "";
    modifiedString += element[0].toUpperCase();
    for (var i = 1; i < element.length - 1; i++) {
    modifiedString += element[i];
    }
    modifiedString += element[element.length - 1].toUpperCase();
    return modifiedString;
}
let tab = ["sebastian", "brandon", "mohamed", "denis", "charlotte", "yassine", "quentin", "idrisse","victor", "vitor", "laurent", "enide", "fadia", "adil", "shahin"]
tab.forEach(element => {
    console.log(modifyString(element));
});

let phrase = "bonjour à tous"
phrase = phrase.toUpperCase()
console.log(phrase);


let tab2 = [1440, 1511, 1731, 1400, 1542, 1571, 1768, 1730, 1959, 1342, 1744, 872, 1237, 1846, 1597, 1583, 1711, 1499, 1679, 1895, 1875, 1928, 1728, 1673, 481, 1934, 673, 1704, 1916, 1958, 1821, 1649, 1640, 1802, 1732, 121, 1924, 1438, 1748, 1046, 1905, 1566, 1152, 1964, 1518, 1603, 1414, 1785, 1993, 1594, 1761, 1455, 1738, 1699, 1507, 1483, 1450, 1653, 1644, 19, 1340, 1227, 1353, 2009, 1188, 1228, 1898, 1941, 1515, 1766, 1351, 1980, 1378, 1702, 1620, 1729, 1279, 1384, 1894, 1770, 1853, 1161, 1970, 1986, 1669, 1938, 1602, 1190, 1822, 425, 1750, 1632, 1613, 1805, 1718, 1990, 1762, 1242, 1485, 1598, 1893, 1995, 1823, 1786, 1506, 1464, 1467, 1639, 1674, 1903, 1961, 1478, 1847, 1760, 1997, 2010, 899, 2000, 1488, 1243, 1891, 1504, 1693, 1176, 1391, 1563, 692, 1497, 1428, 1745, 1368, 1723, 1989, 1930, 1171, 1840, 1372, 1987, 1952, 1842, 1967, 1759, 1929, 1945, 1919, 1333, 1692, 1811, 1221, 1520, 1920, 1093, 1618, 1795, 1686, 1369, 1820, 1857, 1356, 1562, 2004, 1519, 1628, 1831, 1687, 1792, 1948, 927, 1789, 1546, 1338, 1614, 1472, 1494, 1979, 1936, 1577, 1147, 1446, 1683, 1375, 856, 1787, 1517, 1724, 1334, 1642, 1496, 1668, 1725, 1800, 1708, 1814, 1585, 1827, 1801, 1208, 1839, 1596, 1925];

for (let i = 0; i < tab2.length; i++) {
    for (let j = i + 1; j < tab2.length; j++) {
    if (tab2[i] + tab2[j] === 2020) {
        alert(`La combinaison est ${tab2[i]} et ${tab2[j]}`);
        break;
    }
    }
}

let nom =  ["Alice", "Bob", "Charlie", "David", "Eve", "Frank", "Grace", "Henry", "Ivy", "Janet"];
let note = [17, 14, 15, 18, 19, 16, 16, 17, 20, 15];
for (let i = 0; i<nom.length; i++){
    console.log(`${nom[i]} a eu ${note[i]} `);
}
