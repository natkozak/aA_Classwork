require 'sqlite3'
require 'singleton'

class QuestionsDatabase < SQLite3::Database
  include Singleton

  def initialize
    super('questions.db')
    self.type_translation = true
    self.results_as_hash = true
  end
end


class User
  attr_accessor :id, :fname, :lname

  def self.all
    data = QuestionsDatabase.instance.execute("SELECT * FROM users")
    data.map { |datum| User.new(datum) } #makes 2D array out of data
  end

  def self.find_by_id(id)
    user = QuestionsDatabase.instance.execute(<<-SQL, id)
      SELECT
        *
      FROM
        users
      WHERE
        id = ?
    SQL
    return nil unless user.length > 0

    User.new(user.first) # play is stored in an array!
  end

  def self.find_by_name(fname, lname)
    user = QuestionsDatabase.instance.execute(<<-SQL, fname, lname)
      SELECT
        *
      FROM
        users
      WHERE
        fname = ? AND lname = ?
    SQL
    return nil unless user.length > 0

    # User.new(user.first) # play is stored in an array!
    user.map { |datum| User.new(datum) }
  end

  def initialize(options)
    @id = options['id']
    @fname = options['fname']
    @lname = options['lname']
  end

  def authored_questions(id)
    Question.find_by_author_id(id)
  end

  def authored_replies(id)
    Reply.find_by_author_id(id)
  end
end

class Question
  attr_accessor :id, :title, :body, :author_id

  def self.all
    data = QuestionsDatabase.instance.execute("SELECT * FROM questions")
    data.map { |datum| Question.new(datum) } #makes 2D array out of data
  end

  def self.find_by_id(id)
    question = QuestionsDatabase.instance.execute(<<-SQL, id)
      SELECT
        *
      FROM
        questions
      WHERE
        id = ?
    SQL
    return nil unless question.length > 0

    Question.new(question.first) # play is stored in an array!
  end

  def self.find_by_author_id(author_id)
    question = QuestionsDatabase.instance.execute(<<-SQL, author_id)
      SELECT
        *
      FROM
        questions
      WHERE
        author_id = ?
    SQL
    return nil unless question.length > 0

    # Question.new(question.first) # play is stored in an array!
    question.map { |que| Question.new(que) } # maping into an array
  end

  def initialize(options)
    @id = options['id']
    @title = options['title']
    @body = options['body']
    @author_id = options['author_id']
  end

  def author(author_id)
    User.find_by_id(author_id)
  end

  def replies(question_id)
    Reply.find_by_id(question_id)
  end

end

# class QuestionLike
#   attr_accessor :id, :question_id, :author_id, :liker_id

#   def self.all
#     data = QuestionsDatabase.instance.execute("SELECT * FROM question_likes")
#     data.map { |datum| QuestionLike.new(datum) } #makes 2D array out of data
#   end

#   def initialize(options)
#     @id = options['id']
#     @question_id = options['question_id']
#     @author_id = options['author_id']
#     @liker_id = options['liker_id']
#   end
# end

# class QuestionFollow
#   attr_accessor :id, :question_id, :author_id, :follower_id

#   def self.all
#     data = QuestionsDatabase.instance.execute("SELECT * FROM question_follows")
#     data.map { |datum| QuestionFollow.new(datum) } #makes 2D array out of data
#   end

#   def initialize(options)
#     @id = options['id']
#     @question_id = options['question_id']
#     @author_id = options['author_id']
#     @follower_id = options['follower_id']
#   end
# end

class Reply
  attr_accessor :id, :body, :question_id, :author_id, :parent_reply_id

  def self.all
    data = QuestionsDatabase.instance.execute("SELECT * FROM replies")
    data.map { |datum| Reply.new(datum) } #makes 2D array out of data
  end

  def initialize(options)
    @id = options['id']
    @body = options['body']
    @question_id = options['question_id']
    @author_id = options['author_id']
    @parent_reply_id = options['parent_reply_id']
  end

  def self.find_by_id(id)
    reply = QuestionsDatabase.instance.execute(<<-SQL, id)
      SELECT
        *
      FROM
        replies
      WHERE
        id = ?
    SQL
    return nil unless reply.length > 0

    Reply.new(reply.first) # play is stored in an array!
  end

  def self.find_by_author_id(author_id)
    reply = QuestionsDatabase.instance.execute(<<-SQL, author_id)
      SELECT
        *
      FROM
        replies
      WHERE
        author_id = ?
    SQL
    return nil unless reply.length > 0

    # Reply.new(reply.first) # play is stored in an array!
    reply.map { |rep| Reply.new(rep) } # maping into an array
  end

  def self.find_by_question_id(question_id)
    reply = QuestionsDatabase.instance.execute(<<-SQL, question_id)
      SELECT
        *
      FROM
        replies
      WHERE
        question_id = ?
    SQL
    return nil unless reply.length > 0

    # Reply.new(reply.first) # play is stored in an array!
    reply.map { |rep| Reply.new(rep) } # maping into an array
  end

end

# class ReplyLike
#   attr_accessor :id, :reply_id, :author_id, :liker_id

#   def self.all
#     data = QuestionsDatabase.instance.execute("SELECT * FROM reply_likes")
#     data.map { |datum| ReplyLike.new(datum) } #makes 2D array out of data
#   end

#   def initialize(options)
#     @id = options['id']
#     @reply_id = options['reply_id']
#     @author_id = options['author_id']
#     @liker_id = options['liker_id']
#   end
# end