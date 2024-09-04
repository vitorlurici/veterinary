import React from "react";

import { Text, View, Image, TextInput } from "react-native";

import { style } from "./styles";

import Logo from "../../assets/icon.png";

export default function Login() {
  return (
    <View style={style.container}>
      <View style={style.topContent}>
        <Image source={Logo} style={style.logo} resizeMode="contain" />
        <View style={style.logoText}>
          <Text style={style.smallText}>VET</Text>
          <Text style={style.bigText}>LINK</Text>
        </View>
      </View>
      <View style={style.midContent}>
        <View style={style.data}>
          <Text style={style.label}>EMAIL</Text>
          <TextInput style={style.input} placeholder="nome@exemplo.com.br" />
        </View>
        <View style={style.data}>
          <Text style={style.label}>SENHA</Text>
          <TextInput style={style.input} placeholder="Senha" />
          <Text style={style.lostPassword}>Esqueci minha senha</Text>
        </View>
      </View>
      <View style={style.botContent}></View>
    </View>
  );
}
