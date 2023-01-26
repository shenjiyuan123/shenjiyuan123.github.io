---
title: 'Homomorphic Encryption'
date: 2022-09-07
permalink: /posts/2022/09/encryption/
tags:
  - Learning Note
  - Homomorphic Encryption
---
{% include base_path %}


##  Definition

Homomorphic encryption aims at encrypting the tokens and when dealing with the ciphertext, the results stays the same as dealing with the tokens directly. So we say that it keeps homorphic.

If we define a operation $\bigtriangledown$, then to the Encoder and Decoder algorithm, satisfy:

E(X $\bigtriangledown$ Y) = E(X) $\bigtriangledown$ E(Y)

then, this operation haves homomorphism.

Homomorphism comes from the field of algebra and generally includes four types: additive homomorphism, multiplication homomorphism, subtraction homomorphism and division homomorphism. Satisfying additive homomorphism and multiplicative homomorphism at the same time means that it is algebraic homomorphism, that is, **Full Homomorphic**. If all four homomorphisms are satisfied at the same time, it is called arithmetic homomorphism.

For computer operations, achieving full homomorphism means that homomorphism can be achieved for all processing. Homomorphism that can only implement some specific operations is called Somewhat Homomorphic.

## Challenge

The problem of homomorphic encryption was first proposed by Ron Rivest, Leonard Adleman and Michael L. Dertouzos in 1978 (the same year Ron Rivest, Adi Shamir and Leonard Adleman also co-invented the RSA algorithm). But the first "fully homomorphic" algorithm was not presented and mathematically proven until 2009 by Craig Gentry in his paper "Fully Homomorphic Encryption Using Ideal Lattices".

Algorithms that satisfy only additive homomorphism include Paillier and Benaloh algorithms; algorithms that satisfy only multiplicative homomorphism include RSA and ElGamal algorithms.

Homomorphic encryption is of great significance in the era of cloud computing and big data. At present, although cloud computing brings advantages including low cost, high performance, and convenience, from a security perspective, users are not afraid to put sensitive information directly on a third-party cloud for processing. If there is a more practical homomorphic encryption technology, everyone can use various cloud services with confidence, and various data analysis processes will not reveal user privacy. After the encrypted data is processed by the third-party service, the encrypted result is obtained. This result can only be decrypted by the user himself, and the third-party platform cannot obtain any valid data information in the whole process.

On the other hand, for blockchain technology, homomorphic encryption is also a good complement. Using homomorphic encryption technology, smart contracts running on the blockchain can process ciphertext, but cannot know the real data, which greatly improves privacy security.

Currently, fully homomorphic encryption schemes mainly include the following three types:

- Scheme based on ideal lattice: The ideal lattice-based scheme proposed by Gentry and Halevi in ​​2011 can achieve a security strength of 72 bits, and the corresponding public key size is about 2.3 GB, while the processing time of refreshing the ciphertext takes several hours. ten minutes.

- Schemes based on approximating the GCD problem on integers: The scheme proposed by Dijk et al. in 2010 (and subsequent schemes) adopts a more simplified conceptual model and can reduce the public key size to the order of tens of MB.

- Schemes based on the **Learning With Errors (LWE)** problem: Brakerski and Vaikuntanathan et al. proposed related schemes around 2011; Lopez-Alt A et al. designed a multi-key fully homomorphic encryption scheme in 2012, which is close to real-time multi-party encryption. The need for secure computing.

At present, the known homomorphic encryption technology often requires higher computing time or storage cost, and there is still a gap between the performance and strength of traditional encryption algorithms, but the attention in this field has always been high. The author believes that in the near future, There will be solutions that are close to practical.

## Reference

[https://yeasy.gitbook.io/blockchain_guide/05_crypto/homoencryption](https://yeasy.gitbook.io/blockchain_guide/05_crypto/homoencryption)
