const hour = 7;
if (hour > 5 && hour < 12) {
    console.log('Good Morning');
} else if (hour > 12 && hour < 18) {
    console.log('Good Afternoon');
} else if (hour > 18 && hour < 22) {
    console.log('Good Evening');
} else {
    console.log('Good Night');
}

//If hour is bettwen 5 to 12 show the following message: Good morning
//If hour is bettwen 12 to 18 show the following message: Good afternoon
//If hour is bettwen 18 to 22 show the following message: Good evening
//If hour is bettwen 22 to 5 show the following message: Good night