import Userfront from "@userfront/core";
Userfront.init("8b68mprb");

export default function plantWatered () {
    Userfront.user.update({
    data: {
        userPlants: [],
    },
    });
    console.log(Userfront.user)
};