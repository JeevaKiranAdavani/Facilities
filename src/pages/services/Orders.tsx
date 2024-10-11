export const Orders = {
    getData() {
        return[
            {name: "Prasanth", type: "inbound", appointmentId: "Ap-213235", status: "pending", phonenumber: "234237487", address: "Address 1"},
            {name: "Kiran", type: "inbound", appointmentId: "Ap-213236", status: "pending", phonenumber: "234239162", address: "Address 2"},
            {name: "Vinay", type: "inbound", appointmentId: "Ap-213237", status: "pending", phonenumber: "234238233", address: "Address 3"},
            {name: "Sruthi", type: "inbound", appointmentId: "Ap-213238", status: "pending", phonenumber: "234236846", address: "Address 4"},
            {name: "Ravi", type: "inbound", appointmentId: "Ap-213239", status: "pending", phonenumber: "234235358", address: "Address 5"},
            {name: "Arjun", type: "inbound", appointmentId: "Ap-213240", status: "pending", phonenumber: "234231482", address: "Address 6"},
            {name: "Meera", type: "inbound", appointmentId: "Ap-213241", status: "pending", phonenumber: "234236113", address: "Address 7"},
            {name: "Nikhil", type: "inbound", appointmentId: "Ap-213242", status: "pending", phonenumber: "234239946", address: "Address 8"},
            {name: "Sneha", type: "inbound", appointmentId: "Ap-213243", status: "pending", phonenumber: "234236757", address: "Address 9"},
            {name: "Rohit", type: "inbound", appointmentId: "Ap-213244", status: "pending", phonenumber: "234234814", address: "Address 10"},
            {name: "Akhil", type: "inbound", appointmentId: "Ap-213245", status: "pending", phonenumber: "234236588", address: "Address 11"},
            {name: "Anjali", type: "inbound", appointmentId: "Ap-213246", status: "pending", phonenumber: "234236552", address: "Address 12"},
            {name: "Sandeep", type: "inbound", appointmentId: "Ap-213247", status: "pending", phonenumber: "234231072", address: "Address 13"},
            {name: "Ramesh", type: "inbound", appointmentId: "Ap-213248", status: "pending", phonenumber: "234234645", address: "Address 14"},
            {name: "Ravi Teja", type: "inbound", appointmentId: "Ap-213249", status: "pending", phonenumber: "234232053", address: "Address 15"},
            {name: "Divya", type: "inbound", appointmentId: "Ap-213250", status: "pending", phonenumber: "234234132", address: "Address 16"}
          ]
          ;
    },

    getCustomersSmall() {
        return Promise.resolve(this.getData().slice(0, 10));
    },

    getCustomersMedium() {
        return Promise.resolve(this.getData().slice(0, 50));
    },

    getCustomersLarge() {
        return Promise.resolve(this.getData().slice(0, 200));
    },

    getCustomersXLarge() {
        return Promise.resolve(this.getData());
    },

    getCustomers(params:any) {
        const queryParams = params
            ? Object.keys(params)
                  .map((k) => encodeURIComponent(k) + '=' + encodeURIComponent(params[k]))
                  .join('&')
            : '';

        return fetch('https://www.primefaces.org/data/customers?' + queryParams).then((res) => res.json());
    }
};
