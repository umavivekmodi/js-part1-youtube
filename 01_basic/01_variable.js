const accountId = 122334
let accountEmail="ruhanika@gmail.com"
var accountPassword="12345"
accountCity="Jaipur"
let accountState;
// accountId = 2 //not allowed

 console.log(accountId);

 /*
Prefer not to use var
because of issue in block scope means {  } and funcational scope
 */

 accountEmail="suhani@gmail.com"
 accountPassword="212121"
 accountCity="bombay"

 console.table([accountId,accountEmail,accountPassword,accountCity,accountState])