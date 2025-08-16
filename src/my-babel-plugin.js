export default function myBabelPlugin(){
    return{
        visitor: {
            Identifier(path) {
                if (path.node.name === "foo") {
                    path.node.name = "bar";
                }
            }
        }
    }
}