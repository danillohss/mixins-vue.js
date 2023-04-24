export default {
    data: () => ({
      item: "",
      items: [],
    }),
    methods: {
      addItem() {
        this.items.push(this.item);
        this.item = "";
      },
    },
  };