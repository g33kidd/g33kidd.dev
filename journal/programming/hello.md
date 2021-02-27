---
# titles can change, slugs can't...?
title: "Hello World!"
excerpt: "This is the first post on my website, check it out!"
slug: "hello-world"
created: 9-17-2020
published: 2-12-2021
lastEdit: 2-24-2021
version: 1
wip: false

# TODO You can do a featured image.. make in Figma.
# featuredImage: ""
---

I'm baby post-ironic vegan narwhal +1 chicharrones ennui. Jean shorts ennui kitsch pabst, lo-fi fanny pack bespoke hammock banjo tumblr crucifix sustainable. Tattooed lyft VHS pour-over shaman microdosing. Mlkshk authentic live-edge intelligentsia, lo-fi bushwick cray knausgaard wolf fanny pack. Venmo kitsch asymmetrical meditation ramps selfies skateboard flexitarian mustache. Disrupt hell of raclette tacos. Banh mi kinfolk poutine bicycle rights.

Enamel pin poutine etsy salvia fam. Cronut banjo ugh vexillologist, selvage tofu thundercats fam activated charcoal taxidermy kickstarter tbh four dollar toast. Sustainable plaid vice cred shoreditch adaptogen shaman viral. Poutine XOXO slow-carb migas, DIY la croix cold-pressed.

> This is a callout. I'm not really sure.

Subway tile pitchfork plaid helvetica shaman vegan direct trade chillwave microdosing next level green juice banjo four loko hoodie waistcoat. Kitsch heirloom quinoa tumblr next level pour-over la croix cloud bread lomo roof party typewriter blog pickled. Food truck blue bottle pug schlitz freegan tacos hella cloud bread coloring book bushwick offal leggings glossier cold-pressed brooklyn. Squid copper mug you probably haven't heard of them shabby chic meh.

Normcore cred drinking vinegar, portland vinyl meggings pickled shaman locavore small batch. Gastropub letterpress lo-fi williamsburg PBR&B hot chicken, shoreditch tbh salvia mixtape asymmetrical coloring book +1. Vegan gochujang shaman gastropub locavore thundercats cliche food truck mixtape tacos helvetica echo park coloring book. Normcore bushwick authentic freegan austin jianbing biodiesel af umami live-edge squid kombucha. Gluten-free kale chips typewriter distillery stumptown iceland whatever single-origin coffee mlkshk hell of banjo. Vice gentrify lyft umami hell of yuccie chillwave.

Hella narwhal XOXO succulents. 3 wolf moon single-origin coffee af, chartreuse hoodie retro williamsburg hella ugh mixtape pickled hashtag roof party shoreditch. Activated charcoal polaroid vaporware tattooed pitchfork echo park hashtag freegan letterpress lyft master cleanse try-hard. Hashtag prism vice cliche woke pork belly mustache synth listicle. Bespoke hot chicken four loko 3 wolf moon copper mug squid brooklyn meggings direct trade drinking vinegar enamel pin forage post-ironic craft beer. Viral man bun health goth, artisan humblebrag hot chicken gentrify narwhal mlkshk put a bird on it plaid pinterest leggings. Cardigan la croix hashtag coloring book freegan mumblecore microdosing.

# Elixir Code 

```elixir{codeTitle: "test.ex"}
defmodule Nyra.Accounts do
  @moduledoc false

  use Nyra.Names

  alias Nyra.Repo
  alias Nyra.Accounts.User

  @doc "Gets all users from the database."
  def get_users, do: Repo.all(User)

  @doc "Get all users that are active."
  def get_users_active do
    User
    |> User.where_active()
    |> Repo.all()
  end

  @doc """
  Generalized function to getting a user as it makes it a bit simpler to reason about without having to
  deal with aliasing the User module in other places. Just call `find/1` or `find/2`

  By default the user is queried by their uuid. Though, you can pass in any available field
  as a parameter.

  Current queryable fields == :username | :email
  """
  def find(uuid) when is_binary(uuid), do: Repo.get(User, uuid)

  def find(query) when is_list(query) do
    case Repo.get_by(User, query) do
      nil -> {:error, :not_found}
      user -> {:ok, user}
    end
  end

  def find(:username, username), do: Repo.get_by(User, username: username)
  def find(:email, email), do: Repo.get_by(User, email: email)

  @doc """
  Returns a user if a user with the email given isn't found.
  Creates & Returns a new user with a randomly generated username if one isn't found.
  """
  def find_or_create_user(email) do
    case find(:email, email) do
      {:ok, user} ->
        {:ok, user, :existing}

      _default ->
        username = generate_username()
        new_user = create_user(email, username)
        {:ok, new_user, :new}
    end
  end

  @doc "Creates & Inserts a new user into the database."
  def create_user(email, username) do
    %{"email" => email, "username" => username}
    |> User.creation_changeset()
    |> User.insert()
  end

  @doc "Checks if a user is activated based on the UUID provided."
  @spec is_activated?(String.t()) :: :ok | {:error, :account_not_active}
  def is_activated?(user_id) when is_binary(user_id) do
    User
    |> User.with_id(user_id)
    |> User.where_active()
    |> User.select_count()
    |> Repo.all()
    |> Enum.at(0)
    |> is_activated?()
  end

  @doc "Pattern matching for the result above."
  def is_activated?(0), do: {:error, :account_not_active}
  def is_activated?(1), do: :ok
  def is_activated?(_default), do: {:error, :account_not_active}

  @doc """
  Inserts a new user into the database.
  Note:
    Using the returning option since we're using UUID as a primary key.
    It's necessary to get the ID in a return value I guess.
  """
  def insert_user(changeset), do: Repo.insert(changeset, returning: [:id])

  @doc """
  Generates a mostly random username with 64x64 possible combinations.
  """
  def generate_username do
    @names_matrix_1
    |> Enum.map(fn names -> Enum.random(Enum.map(names, fn n -> String.capitalize(n) end)) end)
    |> Enum.join("")
    |> ensure_username_available()
  end

  @doc "Ensures a name isn't taken by another user already."
  def ensure_username_available(username \\ "") do
    User
    |> User.with_username(username)
    |> User.select_count()
    |> Repo.all()
    |> Enum.at(0)
    |> ensure_username_available?()
  end

  @doc "Pattern matching for the result above."
  def ensure_username_available?(0), do: :ok
  def ensure_username_available?(1), do: {:error, :name_taken}
  def ensure_username_available?(_default), do: {:error, :name_taken}
end
```

# Dart Code

```dart{codeTitle: "project/app/lib/example.js"}
// Here's some javascript (jk it's dart)
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
