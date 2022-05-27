function createBlock() {

var countBlock = 3
var count = 1;

    while (count <= countBlock)
    {
        if (count < countBlock)
        {
            var nonce = Math.floor(Math.random() * 20) + 1;

            document.write(`
            <li>
            <form style="padding: 20px; border: 1px solid black;">
                <h1>Блок</h1>
                <label for="numberBlock">Номер на блока</label>
                <input name="numberBlock" type="text" value="`+ count +`" readonly/>
                <label for="nonce">Nonce</label>
                <input name="nonce" type="text" value="`+ nonce +`" readonly/>
                <label for="data">Данни</label>
                <textarea name="data" rows="5" cols="30" readonly></textarea>
            </form>
            </li>
            `);
        }
        
        count++;
    }
}