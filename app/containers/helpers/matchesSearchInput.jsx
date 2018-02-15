import React, { Component } from 'react';

export function matchesSearchInput(searchInput, channelStreamObject) {
  const tmpId = channelStreamObject.channel.name;
  const tmpGame = channelStreamObject.channel.game;

  if (searchInput == "") return true;
  if (tmpId.match(new RegExp(searchInput, "gi"))) return true;
  if (tmpGame.match(new RegExp(searchInput, "gi"))) return true;

  return false;
}

