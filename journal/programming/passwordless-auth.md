---
title: Passwordless Authentication with Phoenix LiveView
excerpt: "Building a Passwordless authentication system with Phoenix LiveVeiw"
slug: "passwordless-authentication-phoenix-liveview"
tags: phoenix, elixir, auth, liveview
created: 2-26-2021
lastEdit: 2-26-2021
published: 2-26-2021
version: 0
wip: true
---

Let me just get right off the bat and say how excited I am for <a href="https://news.ycombinator.com/item?id=26076680" target="_blank">Nx</a>.

Now with that out of the way, I'm going to talk about a Password-less authentication method I came up with for Phoenix LiveView. **Please Note: I'm not a security expert, having only a little experience researching cryptography. Take this with a grain of salt security wise until I have it all figured out.**

Hi there, I'm building a random & ephemeral chat service using Elixir's Phoenix framework. One of the design decisions I made for this project was to make it as easy as possible to enter (mostly verifiable) and start talking right away.

Currently what I have setup is probably not extremely secure, but I'm happy with it at the moment. It's exactly what I envisioned when I started working on this site.

# Code Generation

First off, I'd like to say I'm no security expert; so I may not be using best practices here. I knew I needed to have some form of secure and random code generation so bots couldn't just guess their way in somehow.

Below I have the code I wrote to generate the random code that's sent to the users email. As far as I can tell this is random enough to not be super easily guessable by attackers. If somebody thinks this is redundant or not secure at all, please let me know as I'd love to learn more.

```elixir{3, 5-7}
@spec generate_code(String.t()) :: String.t()
def generate_code(data \\ "crypto") do
  :crypto.hash(:sha256, data)
  |> Base.encode64()
  |> String.to_charlist()
  |> Enum.shuffle()
  |> Enum.take(6)
  |> :binary.list_to_bin()
  |> String.upcase()
end
```

# LiveView

There are two events that we need to handle in the Component. `authenticate` which takes any type of authentication information such as an email or phone number. There's also `verify`, which receives a code and checks if it's valid.

I'm storing the code directly in liveview because I guess nobody can access values unless the servers sends them as a render directly, right? So in this case I don't really care about storing the tokens in a database because my app really only needs a short-lived session for my users. I don't expect them to have to visit several pages to input a token or switch to a different device.

### Notes on Sessions

#### h4 

##### h5

## TODO before finish:

- [x] Secure Random Code Generator
- [ ]  IP Filtering or Rate Limiting for code verification. Since right now you could technically hook into the