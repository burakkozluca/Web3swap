const HelloWorld = artifacts.require("HelloWorld");

contract("HelloWorld", accounts => {
    it("should store and return the correct message", async () => {
        const instance = await HelloWorld.deployed();
        const initialMessage = await instance.getMessage();
        assert.equal(initialMessage, "Hello, Truffle!", "The initial message should be 'Hello, Truffle!'");

        await instance.setMessage("New Message");
        const updatedMessage = await instance.getMessage();
        assert.equal(updatedMessage, "New Message", "The message should be updated to 'New Message'");
    });
});
