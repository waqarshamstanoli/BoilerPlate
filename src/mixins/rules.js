export default {
    data: () => ({
        requiredRules: [(v) => (!!v && v != undefined ? true : "Required !")],
        nameRules: [(v) => (!!v && v.length >= 5 ? true : "Too Short !")],
        descriptionRules: [
            (v) => (!!v && v.length >= 20 ? true : "Too Short (minimum 20 chars)."),
        ],
        numberRules: [(v) => isNaN(v) ? 'Value must be a number' : true],
        nicRules: [
            (v) => v.length !== 13 ? "NIC must be 13 digits long" : true,
        ],
        textRules: [
            (v) => /[0-9]/.test(v) ? "Value must not contain digits" : true,
        ],
        phoneRules: [
            (v) => v.length !== 11 ? "Phone # must be 11 digits long" : true
        ],
        jsonRules: [
            (v) => {
                try {
                    return v ? (JSON.parse(v) ? true : "Invalid JSON") : true;
                } catch (e) {
                    let p = e.message.substring(e.message.indexOf("position"));
                    return e.message;
                }
            },
        ],
        rules: {
            required: (value) => !!value || "Required",
            min: (value) => value.length >= 8 || "Min 8 characters",
            email: (value) => {
                const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                return pattern.test(value) || "Invalid e-mail.";
            },
        },
        rulesreg: {
            min: (value) =>
                value.length >= 3 || "Username must be greater than 3 characters",
            password: (value) =>
                value.length >= 8 || "Password must be  greater than  8 characters",
        },
        emailRules: [
            (v) => !!v || "E-mail is required",
            (v) => /.+@.+/.test(v) || "E-mail must be valid",
        ],
        ownerRules: [
            (v) =>
            (v && v.length >= 3 && v.length <= 25) ||
            "Owner Name must have 3 to 25 characters",
        ],
        businessName: [(v) => (v && v.length <= 30) || "Business name is required"],
        businessNameRule: [(v) => !!v || "Business Name Required"],
        businessType: [
            (v) =>
            (v && v.length <= 30) ||
            "Business type must be less than 30 characters",
        ],
        businessAddress: [
            (v) =>
            (v && v.length <= 50) ||
            "Business address must be less than 50 characters",
        ],
        imageRules: [
            (value) =>
            !value ||
            value.size < 2000000 ||
            "Avatar size should be less than 2 MB!",
        ],
        projectHeadRules: [
            (v) => !!v || "project head is required",
           
        ],
        projectnameRules: [
            (v) => !!v || "project name is required",
            
        ],
        projectdescriptionRules: [
            (v) => !!v || "project description is required",
            
        ],
        projectstartDateRules: [
            (v) => !!v || "project start date is required",
        //    || "start date must be equal or greater than current date",
        ],
        projectendDateRules: [
            (v) => !!v || "project end date is required",
            // (v) => /.+@.+/.test(v) || "end date must must be equal ot greater than start date",
        ],
    }),
};