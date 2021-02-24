---
# titles can change, slugs can't...?
title: "Hello"
excerpt: "Hello World!"
slug: "hello"
created: 9-17-2020
published: 2-12-2021
lastEdit: 2-24-2021
author: "Josh"
description: "Just a short descrtion of a blog post."
version: 0

# TODO You can do a featured image.. make in Figma.
# featuredImage: ""
---

I'm baby post-ironic vegan narwhal +1 chicharrones ennui. Jean shorts ennui kitsch pabst, lo-fi fanny pack bespoke hammock banjo tumblr crucifix sustainable. Tattooed lyft VHS pour-over shaman microdosing. Mlkshk authentic live-edge intelligentsia, lo-fi bushwick cray knausgaard wolf fanny pack. Venmo kitsch asymmetrical meditation ramps selfies skateboard flexitarian mustache. Disrupt hell of raclette tacos. Banh mi kinfolk poutine bicycle rights.

Enamel pin poutine etsy salvia fam. Cronut banjo ugh vexillologist, selvage tofu thundercats fam activated charcoal taxidermy kickstarter tbh four dollar toast. Sustainable plaid vice cred shoreditch adaptogen shaman viral. Poutine XOXO slow-carb migas, DIY la croix cold-pressed.

Subway tile pitchfork plaid helvetica shaman vegan direct trade chillwave microdosing next level green juice banjo four loko hoodie waistcoat. Kitsch heirloom quinoa tumblr next level pour-over la croix cloud bread lomo roof party typewriter blog pickled. Food truck blue bottle pug schlitz freegan tacos hella cloud bread coloring book bushwick offal leggings glossier cold-pressed brooklyn. Squid copper mug you probably haven't heard of them shabby chic meh.

![Designing in Figma](/uploads/dayly-preview.png)

Normcore cred drinking vinegar, portland vinyl meggings pickled shaman locavore small batch. Gastropub letterpress lo-fi williamsburg PBR&B hot chicken, shoreditch tbh salvia mixtape asymmetrical coloring book +1. Vegan gochujang shaman gastropub locavore thundercats cliche food truck mixtape tacos helvetica echo park coloring book. Normcore bushwick authentic freegan austin jianbing biodiesel af umami live-edge squid kombucha. Gluten-free kale chips typewriter distillery stumptown iceland whatever single-origin coffee mlkshk hell of banjo. Vice gentrify lyft umami hell of yuccie chillwave.

Hella narwhal XOXO succulents. 3 wolf moon single-origin coffee af, chartreuse hoodie retro williamsburg hella ugh mixtape pickled hashtag roof party shoreditch. Activated charcoal polaroid vaporware tattooed pitchfork echo park hashtag freegan letterpress lyft master cleanse try-hard. Hashtag prism vice cliche woke pork belly mustache synth listicle. Bespoke hot chicken four loko 3 wolf moon copper mug squid brooklyn meggings direct trade drinking vinegar enamel pin forage post-ironic craft beer. Viral man bun health goth, artisan humblebrag hot chicken gentrify narwhal mlkshk put a bird on it plaid pinterest leggings. Cardigan la croix hashtag coloring book freegan mumblecore microdosing.

<p class="text-labs-orange text-xl">Here's Some Code!!</p>

```js
class Employee {
  final String name;
  final String email;

  Employee(this.name, this.email);

  Employee.fromJson(Map<String, dynamic> json)
      : name = json['name'],
        email = json['email'];

  Map<String, dynamic> toJson() =>
    {
      'name': name,
      'email': email,
    };
}

//Now CONVERT SIMPLE JSON TO FLUTTER OBJECT 
Map employeeMap = jsonDecode(jsonString);
var employee = Employee.fromJson(employeeMap);

//CONVERT FLUTTER OBJECT TO SIMPLE JSON STRING
String json = jsonEncode(employee);
```


