# Semestre_4_Snack_Bar_Project
HTML/CSS Frontend and JavaScript Backend of a homepage of a snack ordering website

Business Rules:

- Price of each sandwich → R$ 10,00
- Price of each sides → R$ 2,50
- Price of each drink → R$ 4,00
- If drink is cold →  plus R$ 1,00
- Orders can't be saved without being closed first
- All fields must be filled in order to close an order
- All orders must have a sandwich

Buttons / Functions:

- Novo Pedido (New Order) → Generates a random number from 1 to 10000, sets it to the Order Code field and enables the fields for editing
- Salvar Pedido (Save Order) → Creates an object and add to its atributes the order data
- Fechar Pedido (Close Order) → Concatenates the value of each field in the Order (Pedido Atual) textarea
- Imprimir Cupom (Print Coupon) → Prints a pdf document with the current Order information
- Limpar Campos (Clear Fields) → Resets the forms / clear all fields
- Imprimir Todos os Pedidos (Print all Orders) → Prints a pdf document with all the Orders objects created so far
- Sair (Exit) → Closes the window
