flow: 

1) Deploy two instances of the token smart contract (each instance will represent one DAO)
2) transfer > 50% of the token supply to a user, and do that for both token smart contract instances

3) hardcode the DAO addresses and the token addresses into the SNF contract

4) deploy the SNF contract 

So now at this point we have "two DAOs" and two token holders right? And an SNF contract for which we need to fill the blanks 

Token holders  negociate over SmartSettle...

5) We get the output in JSON format

6) call fill_blanks() to save the result of the negotiation

7) make each token holder call fund() to lock their tokens

8) call execute() to execute the swap

9) retrieve the address of the new DAO

10) dislay on the UI the value of the issues and the balance of the two token holders in the new DAO tokens

