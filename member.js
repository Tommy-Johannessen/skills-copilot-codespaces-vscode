function skillsMember() {
    var member = {
        name: "John",
        age: 30,
        skills: ["JavaScript", "HTML", "CSS"],
        address: {
            city: "New York",
            street: "Broadway"
        }
    };
    console.log(member.skills);
    console.log(member.skills[0]);
    console.log(member.skills[1]);
    console.log(member.skills[2]);
    console.log(member.address.city);
    console.log(member.address.street);
}