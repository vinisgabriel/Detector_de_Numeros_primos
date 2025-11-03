NovoAppPrimos - Calculadora de Números Primos

Visão Geral do Projeto

Este projeto é um aplicativo mobile simples desenvolvido em React Native (utilizando o framework Expo) com o objetivo de calcular e exibir números primos até um limite definido pelo usuário.

Inicialmente criado como um desafio pessoal de desenvolvimento, este projeto representa a versão estável e limpa do código, compilada com sucesso em um arquivo APK instalável para Android.

Funcionalidades

* Cálculo de Primos: Processa números até um limite definido e lista todos os números primos encontrados.
* Interface Simples: Design limpo e direto ao ponto, focado na funcionalidade principal.
* Aplicação Nativa: Compilado e instalado como um APK independente (sem depender do Expo Go).

Tecnologias Utilizadas

* Framework: React Native (Expo)
* Linguagem: JavaScript
* Build System: EAS Build (Expo Application Services)

Como Rodar Localmente (Desenvolvimento)

Para clonar e executar este projeto localmente no seu ambiente de desenvolvimento:

1.  Clone o Repositório:
    git clone https://github.com/vinisgabriel/NovoAppPrimos.git
    cd NovoAppPrimos

2.  Instale as Dependências:
    npm install

3.  Inicie o Servidor Expo:
    npx expo start
    (Escaneie o QR Code com o aplicativo Expo Go no seu celular para testar em tempo real.)

Gerando o APK para Instalação

O build para instalação nativa (APK) foi configurado usando EAS Build, conforme o arquivo eas.json neste repositório.

Para gerar um novo APK (após fazer alterações no código):

eas build --platform android --profile production
(Este comando gerará um arquivo .apk que pode ser instalado diretamente em qualquer dispositivo Android.)
